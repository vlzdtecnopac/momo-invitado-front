import { useState, ReactNode, createContext, useContext  } from "react";
import en from './../lang/en.json'; 
import es from './../lang/es.json'; 

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
    
      const translate = (key: number) => languages[language][key] || key;

      return(
        <Langi18nConText.Provider value={{ translate, setLanguage, language }}>
            {children}
        </Langi18nConText.Provider>
      );
    
}