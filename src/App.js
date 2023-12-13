import React from 'react';
import style from './App.module.css';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import Footer from './Components/footer/Footer';
import Navigation from './Components/navigation/Navigation';

function App() {
  return (
    <div className={style.App} >
      <Navigation />
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
