/**
 *
 * i18nHelper test
 *
 */

import esTranslationMessages from 'translations/es.json';
import { appLocales, formatTranslationMessages, translationMessages } from '../i18nHelper';

describe('i18nHelper helper', () => {
  it('should be an array of locales', () => {
    expect(Array.isArray(appLocales)).toEqual(true);
  });  

  it('should return formatted messages', () => {
    const messages = {};

    // If there is not any messages the default messages must fill in the object
    expect(formatTranslationMessages('sv', messages)).toEqual(esTranslationMessages);
  });

  it('should be and object with the different locales', () => {
    // Length of locales must match the translations object
    expect(appLocales.length).toEqual(Object.keys(translationMessages).length);

    // Translations must be an object
    expect(typeof translationMessages).toEqual('object');
  });   
});