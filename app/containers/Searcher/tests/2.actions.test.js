import {
  changeSearchInput,
  loadSongs,
  songsLoaded,
  songsLoadingError,
} from '../actions';

import {
  CHANGE_INPUT,
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_ERROR,
} from '../constants';

describe('<Searcher /> - actions', () => {
  it('has a type of CHANGE_INPUT', () => {
    const expected = {
      type: CHANGE_INPUT,
      value: 'test',
    };
    expect(changeSearchInput('test')).toEqual(expected);
  });

  it('has a type of LOAD_SONGS', () => {
    const expected = {
      type: LOAD_SONGS,
    };
    expect(loadSongs()).toEqual(expected);
  });

  it('has a type of LOAD_SONGS_SUCCESS', () => {
    const locale = 'es';
    const expected = {
      type: LOAD_SONGS_SUCCESS,
      songs: [{ test:'test' }],
      locale,

    };
    expect(songsLoaded([{ test:'test' }], locale)).toEqual(expected);
  });

  it('has a type of LOAD_SONGS_ERROR', () => {
    const expected = {
      type: LOAD_SONGS_ERROR,
      error: 'error test',
    };
    expect(songsLoadingError('error test')).toEqual(expected);
  });
});
