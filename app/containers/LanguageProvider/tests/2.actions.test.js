import {
  changeLocale,
} from '../actions';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('<LanguageProvider /> - actions', () => {
  it('has a type of CHANGE_LOCALE', () => {
    const expected = {
      type: CHANGE_LOCALE,
      locale: 'sv',
    };
    expect(changeLocale('sv')).toEqual(expected);
  });
});
