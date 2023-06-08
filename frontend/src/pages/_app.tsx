import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.sass';
import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import store from '../redux/store';
import enTranslation from '../locales/en.json';
import ptTranslation from '../locales/pt.json';

i18n
.init({
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: { escapeValue: false },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Provider>
  );
};

export default MyApp;
