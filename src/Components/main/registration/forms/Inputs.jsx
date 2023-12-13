/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import styles from "./Inputs.module.css";

// Validation

const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [InputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;

                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;

                case 'isEmail':
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
            }
        }
    }, [value])

    useEffect( () => {
        if( isEmpty || maxLengthError || minLengthError || emailError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError, emailError])

    return{
        isEmpty,
        minLengthError,
        emailError,
        maxLengthError,
        InputValid
    }
}



const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)

    const validationOnChange = (e) => {
        setValue(e.target.value)

    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    return{
        value,
        validationOnChange,
        onBlur,
        isDirty,
        ...valid
    }
}

// Validation

function Inputs(){
    const name = useInput('', {isEmpty: true, minLength:2, maxLength:  35})
    const email = useInput('', {isEmpty: true, minLength:3, isEmail:true})

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
      });
    const [records, setRecords] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setRecords([...records, formValues]);
        console.log(formValues.name, formValues.email)
        setFormValues({
          name: "",
          email: "",
        });
      };
    // Submit form

    return(
        <div className={styles.inputs}>
            <form className={styles.forms} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.nameInput}>
                    {(name.isDirty && name.isEmpty) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>*Поле не може бути порожнім</div>}
                    {(name.isDirty && name.minLengthError) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>*Некоректна довжина</div>}
                    {(name.isDirty && name.maxLengthError) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>*Довге імʼя</div>}
                    <div className={styles.inputBefore}>Імʼя:</div>
                    <input onChange={ e => { name.validationOnChange(e); setFormValues({ ...formValues, name: e.target.value })}} onBlur={e => name.onBlur(e)} value={formValues.name} className={styles.name} name="name" type="text"/>
                </div>
                <div className={styles.mailInput}>
                    {(email.isDirty && email.isEmpty) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>Поле не може бути порожнім</div>}
                    {(email.isDirty && email.minLengthError) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>Некоректна довжина</div>}
                    {(email.isDirty && email.emailError) && <div style={{color:'red', paddingLeft:100, fontSize:12}}>Некоректний e-mail</div>}
                    <div className={styles.inputBefore}>E-mail:</div>
                    <input onChange={ e => { email.validationOnChange(e); setFormValues({ ...formValues, email: e.target.value })}} onBlur={e => email.onBlur(e)} value={formValues.email} className={styles.email}  name="email" type="text"/>
                </div>
                <div className={styles.sendButton}>
                    <button disabled={!email.InputValid || !name.InputValid} className={styles.sendBtn} type="submit">Підписатись</button>
                </div>
            </form>
            
        </div>
    )
}

export default Inputs;