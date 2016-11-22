import { fromJS } from 'immutable';

import languageProviderReducer, { initialState } from '../reducer';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('<LanguageProvider /> - reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(languageProviderReducer(undefined, {}).toJS()).toEqual(expected.toJS());
  });

  it('should change the locale', () => {
    const locale = 'sv';
    const expected = state.
      set('locale', locale);

    expect(languageProviderReducer(undefined, {
      type: CHANGE_LOCALE,
      locale,
    }).toJS()).toEqual(expected.toJS());
  });
});
