/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_INPUT,
} from './constants';

export const initialState = fromJS({
  searchStarted: false,
  searchInputValue: '',
});

function searcherReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state
        .set('searchStarted', true)
        .set('searchInputValue', action.value);
    default:
      return state;
  }
}

export default searcherReducer;

