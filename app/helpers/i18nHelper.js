/**
 *
 * i18nHelper.js
 *
 */

import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from 'MP/containers/App/constants';
import esLocaleData from 'react-intl/locale-data/es';
import esTranslationMessages from 'translations/es.json';

addLocaleData(esLocaleData);

export const appLocales = [
  'es',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, esTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(defaultFormattedMessages).length ? Object.keys(defaultFormattedMessages) : Object.keys(messages);

  messageKeys.forEach((messageKey) => {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  });

  return formattedMessages;
};

export const translationMessages = {
  es: formatTranslationMessages('es', esTranslationMessages),
};
