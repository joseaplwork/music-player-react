import { fromJS } from 'immutable';

import {
  selectLanguage,
  selectLocale,
} from '../selectors';

describe('<LanguageProvider /> - selectors', () => {
  describe('selectLanguage', () => {
    const languageSelector = selectLanguage();

    it('should select the language state', () => {
      const languageState = fromJS({});
      const mockedState = fromJS({
        language: languageState,
      });

      expect(languageSelector(mockedState)).toEqual(languageState);
    });
  });

  describe('selectLocale', () => {
    const localeSelector = selectLocale();

    it('should select the locale state', () => {
      const locale = 'es';
      const mockedState = fromJS({
        language: { locale },
      });

      expect(localeSelector(mockedState)).toEqual(locale);
    });
  });
});
