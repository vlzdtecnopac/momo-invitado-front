import { useState, ReactNode, createContext, useContext  } from "react";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './../lang/en.json'; 
import es from './../lang/es.json'; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: 'es', // idioma predeterminado
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
      escapeValue: false, // No necesitas escapar los valores de interpolación
    },
  });


interface DynamicLayoutProps {
    children: ReactNode;
  }

export const Langi18nConText = createContext<any | null>(null);

export const useLanguage = () => useContext(Langi18nConText);


export const Langi18nProvider: React.FC<DynamicLayoutProps> =  ({ children }) => {
    const [language, setLanguage] = useState('es');
    const languages: any = {
        en,
        es,
      };
    
      const translate = (key: string, variables?: Record<string, any>) => {
        return variables ? i18n.t(languages[language][key], variables) : i18n.t(languages[language][key]);
      };

      return(
        <Langi18nConText.Provider value={{ translate, setLanguage, language }}>
            {children}
        </Langi18nConText.Provider>
      );
    
}