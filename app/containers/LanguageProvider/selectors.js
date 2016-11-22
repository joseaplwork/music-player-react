/*
 *
 * LanguageProvider selectors
 *
 */

import { createSelector } from 'reselect';

const selectLanguage = () => (state) => state.get('language');

const selectLocale = () => createSelector(
  selectLanguage(),
  (languageState) => languageState.get('locale'),
);

export {
  selectLanguage,
  selectLocale,
};
