import { useTranslation } from 'react-i18next';
import './App.css'
import { useState } from 'react';
import { LangContext } from './contexts/LangContext';
// import Button from './components/button/index';

function App() {
  const { t, i18n }=useTranslation();
  const [ lang, setLang] = useState('uz');
  function handlechangelang (e){
     setLang(e.target.value)
  }
  return (
    <>
    <LangContext.Provider value={{lang , setLang}}>
    <header className='header-container'>
      <select onChange={handlechangelang}>
        <option value="uz">O'zbekcha</option>
        <option value="eng">English</option>
        <option value="ru">Русский</option>
      </select>
       <ul>
        <li>{t('Home',{lng: lang})}</li>
        <li>{t('About',{lng: lang})}</li>
        <li>{t('Works',{lng: lang})}</li>
        <li>{t('Services',{lng: lang})}</li>
        <li>{t('Contact',{lng: lang})}</li>
       </ul>
    <span><p>{t('Started',{lng: lang})}</p></span>
    </header>
    <main className='main-container'>
      <hero-container>
        <h1>{t('Title',{lng: lang})}</h1>
        <p>{t('text',{lng: lang})}</p>
      </hero-container>
      <img-container>
      <img src="../public/phone.png" alt="rasm" />
      </img-container>
    </main>
    </LangContext.Provider>
   

    </>
  );
}

export default App;
