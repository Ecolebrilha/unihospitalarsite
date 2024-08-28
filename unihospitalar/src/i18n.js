import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'Hello World'
      // Traduções em inglês
    }
  },
  pt: {
    message: {
      hello: 'Olá Mundo'
      // Traduções em português
    }
  }
};

const i18n = createI18n({
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en',
  messages,
});

export default i18n;