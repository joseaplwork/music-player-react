import { fromJS } from 'immutable';
import {
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_ERROR,
} from 'MP/containers/Searcher/constants';

import appReducer, { initialState } from '../reducer';


describe('<App /> - reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should set the loading state to true', () => {
    const expectedResult = state
      .set('loading', true);

    expect(appReducer(undefined, { type: LOAD_SONGS }).toJS()).toEqual(expectedResult.toJS());
  });

  it('should set songs to the state', () => {
    const songs = [{
      kind: 'song',
      artistId: 123,
    }];

    const expectedResult = state
      .set('songs', songs);

    expect(appReducer(undefined, {
      type: LOAD_SONGS_SUCCESS,
      songs: {
        results: songs,
      },
    }).toJS()).toEqual(expectedResult.toJS());
  });

  it('should set error to the state', () => {
    const error = 'test.error';

    const expectedResult = state
      .set('error', error);

    expect(appReducer(undefined, {
      type: LOAD_SONGS_ERROR,
      error,
    }).toJS()).toEqual(expectedResult.toJS());
  });
});
