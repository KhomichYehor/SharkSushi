import React from 'react';
import style from './App.module.css';
import Header from './Components/header/Header';
import Main from './Components/main/Main';

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
