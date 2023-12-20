import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next'; 
import './index.css';
import { LangContext } from '../../contexts/LangContext';
export default function Button() {
    let langContext = useContext(LangContext)
    const { t  } = useTranslation(); 
    return (
        <button>
            <p>{t('Download', {lng: langContext.lang})}</p>
        </button>
    );
}
