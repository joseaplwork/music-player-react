/*
 *
 * Searcher actions
 *
 */

import {
  CHANGE_INPUT,
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_ERROR,
} from './constants';

export function changeSearchInput(value) {
  return {
    type: CHANGE_INPUT,
    value,
  };
}

export function loadSongs() {
  return {
    type: LOAD_SONGS,
  };
}

export function songsLoaded(songs, locale) {
  return {
    type: LOAD_SONGS_SUCCESS,
    songs,
    locale,
  };
}

export function songsLoadingError(error) {
  return {
    type: LOAD_SONGS_ERROR,
    error,
  };
}

