/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { filterSongs } from 'MP/helpers/parseDataHelper';
import {
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_ERROR,
} from 'MP/containers/Searcher/constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  songs: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SONGS:
      return state
        .set('loading', true);
    case LOAD_SONGS_SUCCESS:
      return state
        .set('songs', filterSongs(action.songs))
        .set('loading', false);
    case LOAD_SONGS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
