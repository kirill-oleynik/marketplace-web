import i18n from 'i18next';

export default function createI18n(translations) {
  return i18n.init({
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: {
      en: translations
    }
  });
}
