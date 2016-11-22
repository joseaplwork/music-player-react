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

export function songsLoaded(songs) {
  return {
    type: LOAD_SONGS_SUCCESS,
    songs,
  };
}

export function songsLoadingError(error) {
  return {
    type: LOAD_SONGS_ERROR,
    error,
  };
}

