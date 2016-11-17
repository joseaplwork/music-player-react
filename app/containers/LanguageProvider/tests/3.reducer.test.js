import languageProviderReducer from '../reducer';
import { fromJS } from 'immutable';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('<LanguageProvider /> - reducer', () => {
  it('should return the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(fromJS({
      locale: 'es',
    }));
  });

  it('should change the locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LOCALE, locale: 'sv' }).toJS()).toEqual({
      locale: 'sv',
    });
  });
});
