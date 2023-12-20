import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect, useState } from "react";
import { LangContext } from "./contexts/LangContext";
import Button from "./components/button";
import { FaRegMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";
function App() {

   const { t, i18n } = useTranslation();
   const [lang, setLang] = useState("uz");
   function handlechangelang(e) {
      setLang(e.target.value);
   }
   useEffect(()=>{
      document.querySelector('body').setAttribute('data-theme', 'light');
   }, [])
   function setDarkMode (){
      document.querySelector('body').setAttribute('data-theme', 'dark');
   }
   function setLightMode (){
      document.querySelector('body').setAttribute('data-theme', 'light');
   }
   function onchangecheckbooks (e){
      if( e.target.checked){
         setLightMode()
      } else {
         setDarkMode()
      }
   }
   return (
      <>
         <LangContext.Provider value={{ lang, setLang }}>
            <header className="header-container">
               <select onChange={handlechangelang}>
                  <option value="uz">O'zbekcha</option>
                  <option value="eng">English</option>
                  <option value="ru">Русский</option>
               </select>
               <FaRegMoon className="Icon"></FaRegMoon>
               <div class="checkboxes__row" onChange={onchangecheckbooks}>
    <div class="checkboxes__item">
      <label class="checkbox style-e">
        <input type="checkbox"/>
        <div class="checkbox__checkmark"></div>
      </label>
    </div>
  </div>
  <LuSunMoon className="Icon"></LuSunMoon>

               <ul>
                  <li>{t("Home", { lng: lang })}</li>
                  <li>{t("About", { lng: lang })}</li>
                  <li>{t("Works", { lng: lang })}</li>
                  <li>{t("Services", { lng: lang })}</li>
                  <li>{t("Contact", { lng: lang })}</li>
               </ul>
               <span>
                  <p>{t("Started", { lng: lang })}</p>
               </span>
            </header>
            <main className="main-container">
               <hero-container>
                  <h1>{t("Title", { lng: lang })}</h1>
                  <p>{t("text", { lng: lang })}</p>
                  <div className="btn-conntainer">
                  <Button></Button>
                  <Button></Button>
                  </div>
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
