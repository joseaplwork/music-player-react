import esTranslationMessages from 'translations/es.json';

import { appLocales, formatTranslationMessages, translationMessages } from '../i18nHelper';

describe('i18nHelper helper', () => {
  it('should be an array of locales', () => {
    expect(Array.isArray(appLocales)).toEqual(true);
  });

  it('should return formatted messages', () => {
    const messages = {};

    expect(formatTranslationMessages('sv', messages)).toEqual(esTranslationMessages);
  });

  it('should be and object with the different locales', () => {
    expect(appLocales.length).toEqual(Object.keys(translationMessages).length);
    expect(typeof translationMessages).toEqual('object');
  });
});