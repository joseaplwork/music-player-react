import { fromJS } from 'immutable';
import {
  loadSongs,
  songsLoaded,
  songsLoadingError,
} from 'MP/containers/Searcher/actions';
import {
  triggerFilter,
} from 'MP/containers/SongsFilter/actions';
import {
  playNext,
  playPrevious,
} from 'MP/containers/Player/actions';
import {
  setCurrentSong,
} from 'MP/containers/SongListItem/actions';
import {
  FILTER_DURATION,
  FILTER_GENDER,
  FILTER_PRICE,
  NO_FILTER,
} from 'MP/containers/SongsFilter/constants';

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

    expect(appReducer(undefined, loadSongs()).toJS()).toEqual(expectedResult.toJS());
  });

  it('should set songs to the state', () => {
    const songs = {
      results: [{
        trackName: 'test',
      }, {
        trackName: 'test',
      }],
    };

    const expectedResult = state
      .set('songs', songs.results);

    expect(appReducer(undefined, songsLoaded(songs)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should set error to the state', () => {
    const error = 'test.error';

    const expectedResult = state
      .set('error', error);

    expect(appReducer(undefined, songsLoadingError(error)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should sort songs by duration', () => {
    const mockedState = state
      .set('songs', [{
        trackTimeMillis: '321',
      }, {
        trackTimeMillis: '123',
      }]);

    const expectedResult = state
      .set('songs', [{
        trackTimeMillis: '123',
      }, {
        trackTimeMillis: '321',
      }]);

    expect(appReducer(mockedState, triggerFilter(FILTER_DURATION)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should sort songs by duration', () => {
    const mockedState = state
      .set('songs', [{
        trackTimeMillis: '321',
      }, {
        trackTimeMillis: '123',
      }]);

    const expectedResult = state
      .set('songs', [{
        trackTimeMillis: '123',
      }, {
        trackTimeMillis: '321',
      }]);

    expect(appReducer(mockedState, triggerFilter(FILTER_DURATION)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should sort songs by gender', () => {
    const mockedState = state
      .set('songs', [{
        primaryGenreName: '321',
      }, {
        primaryGenreName: '123',
      }]);

    const expectedResult = state
      .set('songs', [{
        primaryGenreName: '123',
      }, {
        primaryGenreName: '321',
      }]);

    expect(appReducer(mockedState, triggerFilter(FILTER_GENDER)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should sort songs by gender', () => {
    const mockedState = state
      .set('songs', [{
        trackName: '321',
      }, {
        trackName: '123',
      }]);

    const expectedResult = state
      .set('songs', [{
        trackName: '123',
      }, {
        trackName: '321',
      }]);

    expect(appReducer(mockedState, triggerFilter(NO_FILTER)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should sort songs by price', () => {
    const mockedState = state
      .set('songs', [{
        trackPrice: '321',
      }, {
        trackPrice: '123',
      }]);

    const expectedResult = state
      .set('songs', [{
        trackPrice: '123',
      }, {
        trackPrice: '321',
      }]);

    expect(appReducer(mockedState, triggerFilter(FILTER_PRICE)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should set the current song', () => {
    const current = 0;
    const songs = [{
      trackId: 123,
    }];

    const mockedState = state
      .set('songs', songs);

    const expectedResult = mockedState
      .setIn(['currentSong', 'current'], current)
      .setIn(['currentSong', 'song'], songs[current]);

    expect(appReducer(mockedState, setCurrentSong(current)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should set the next song', () => {
    const prev = 0;
    const next = 1;
    const songs = [{
      trackId: 123,
    }, {
      trackId: 345,
    }];

    const mockedState = state
      .set('songs', songs);

    const expectedResult = mockedState
      .setIn(['currentSong', 'prev'], prev)
      .setIn(['currentSong', 'current'], next)
      .setIn(['currentSong', 'song'], songs[next]);

    expect(appReducer(mockedState, playNext(next)).toJS())
      .toEqual(expectedResult.toJS());
  });

  it('should set the previous song', () => {
    const next = 1;
    const prev = 0;
    const songs = [{
      trackId: 123,
    }, {
      trackId: 345,
    }];

    const mockedState = state
      .set('songs', songs);

    const expectedResult = mockedState
      .setIn(['currentSong', 'next'], next)
      .setIn(['currentSong', 'current'], prev)
      .setIn(['currentSong', 'song'], songs[prev]);

    expect(appReducer(mockedState, playNext(prev)).toJS())
      .toEqual(expectedResult.toJS());
  });
});
