const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr', 'de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localePath: 'public/locales',
  localeSubpaths: {
    en: 'en',
    fr: 'fr',
    ar: 'ar',
    de: 'de',
    id: 'id',
    pt: 'pt',
    zh: 'zh',
  },
});
