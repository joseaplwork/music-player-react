import { fromJS } from 'immutable';

import searcherReducer, { initialState } from '../reducer';
import {
  CHANGE_INPUT,
} from '../constants';

describe('<Searcher /> - reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(searcherReducer(undefined, {}).toJS()).toEqual(expected.toJS());
  });

  it('should change the searchInputValue', () => {
    const expected = state
      .set('searchInputValue', 'test')
      .set('searchStarted', true);

    expect(searcherReducer(undefined, {
      type: CHANGE_INPUT,
      value: 'test',
    }).toJS()).toEqual(expected.toJS());
  });
});