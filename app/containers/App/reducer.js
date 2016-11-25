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
import {
  FILTER_DURATION,
  FILTER_GENDER,
  FILTER_PRICE,
  NO_FILTER,
} from 'MP/containers/SongsFilter/constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  songs: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SONGS:
      return state
        .set('loading', true);
    case LOAD_SONGS_SUCCESS: {
      const songs = fromJS(filterSongs(action.songs, action.locale));
      const sorted = songs.sort(
        (a, b) => a.get('trackName').localeCompare(b.get('trackName'))
      );

      return state
        .set('songs', sorted.toJS())
        .set('loading', false);
    }
    case LOAD_SONGS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case FILTER_DURATION: {
      const songs = fromJS(state.get('songs'));
      const sorted = songs.sort(
        (a, b) => a.get('trackTimeMillis').localeCompare(b.get('trackTimeMillis'))
      );

      return state
        .set('songs', sorted.toJS());
    }
    case FILTER_PRICE: {
      const songs = fromJS(state.get('songs'));
      const sorted = songs.sort(
        (a, b) => a.get('trackPrice').localeCompare(b.get('trackPrice'))
      );

      return state
        .set('songs', sorted.toJS());
    }
    case FILTER_GENDER: {
      const songs = fromJS(state.get('songs'));
      const sorted = songs.sort(
        (a, b) => a.get('primaryGenreName').localeCompare(b.get('primaryGenreName'))
      );

      return state
        .set('songs', sorted.toJS());
    }
    case NO_FILTER: {
      const songs = fromJS(state.get('songs'));
      const sorted = songs.sort(
        (a, b) => a.get('trackName').localeCompare(b.get('trackName'))
      );

      return state
        .set('songs', sorted.toJS());
    }
    default:
      return state;
  }
}

export default appReducer;
