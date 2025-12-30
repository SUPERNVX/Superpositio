import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar os arquivos de tradução
import ptTranslations from './locales/pt/translation.json';
import esTranslations from './locales/es/translation.json';
import enTranslations from './locales/en/translation.json';
import ruTranslations from './locales/ru/translation.json';

// Configuração do i18n
i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Pasa o i18n para o React
  .init({
    resources: {
      pt: {
        translation: ptTranslations
      },
      es: {
        translation: esTranslations
      },
      en: {
        translation: enTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    fallbackLng: 'pt', // Idioma padrão
    debug: true, // Mostra informações no console durante o desenvolvimento

    interpolation: {
      escapeValue: false, // React já protege contra XSS
    }
  });

export default i18n;