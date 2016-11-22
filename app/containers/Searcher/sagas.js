/*
 *
 * Searcher sagas
 *
 */

import { takeLatest } from 'redux-saga';
import { call, put, select, fork } from 'redux-saga/effects';
import { LOAD_SONGS } from 'MP/containers/Searcher/constants';
import { songsLoaded, songsLoadingError } from 'MP/containers/Searcher/actions';
import { selectSearcherInputValue } from 'MP/containers/Searcher/selectors';
import requestHelper from 'MP/helpers/requestHelper';

export function* getSongs() {
  const term = yield select(selectSearcherInputValue());
  const requestURL = `/api/?term=${term}`;

  try {
    const songs = yield call(requestHelper, requestURL);
    yield put(songsLoaded(songs));
  } catch (err) {
    yield put(songsLoadingError(err));
  }
}

export function* getSongsWatcher() {
  yield fork(takeLatest, LOAD_SONGS, getSongs);
}
