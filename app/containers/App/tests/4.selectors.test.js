import { fromJS } from 'immutable';

import {
  selectGlobal,
  selectLoading,
  selectError,
  selectSongs,
  selectLocationState,
  selectCurrentSong,
  selectNext,
  selectPrevious,
} from '../selectors';

describe('<App /> - selectors', () => {
  describe('selectGlobal', () => {
    const globalSelector = selectGlobal();

    it('should select the global state', () => {
      const globalState = fromJS({});
      const mockedState = fromJS({
        global: globalState,
      });

      expect(globalSelector(mockedState)).toEqual(globalState);
    });
  });

  describe('selectLoading', () => {
    const loadingSelector = selectLoading();

    it('should select the loading', () => {
      const loading = false;
      const mockedState = fromJS({
        global: {
          loading,
        },
      });

      expect(loadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe('selectError', () => {
    const errorSelector = selectError();

    it('should select the error', () => {
      const error = 404;
      const mockedState = fromJS({
        global: {
          error,
        },
      });

      expect(errorSelector(mockedState)).toEqual(error);
    });
  });

  describe('selectSongs', () => {
    const songsSelector = selectSongs();

    it('should select the songs', () => {
      const songs = false;
      const mockedState = fromJS({
        global: {
          songs,
        },
      });

      expect(songsSelector(mockedState)).toEqual(songs);
    });
  });

  describe('selectCurrentSong', () => {
    const currentSongSelector = selectCurrentSong();

    it('should select the current song', () => {
      const song = {
        trackName: 123,
      };

      const mockedState = fromJS({
        global: {
          currentSong: {
            song,
          },
        },
      });

      expect(currentSongSelector(mockedState).toJS()).toEqual(song);
    });
  });

  describe('selectNext', () => {
    const nextSelector = selectNext();

    it('should select the next song', () => {
      const next = 1;

      const mockedState = fromJS({
        global: {
          currentSong: {
            next,
          },
        },
      });

      expect(nextSelector(mockedState)).toEqual(next);
    });
  });

  describe('selectPrevious', () => {
    const previousSelector = selectPrevious();

    it('should select the previous song', () => {
      const prev = 1;

      const mockedState = fromJS({
        global: {
          currentSong: {
            prev,
          },
        },
      });

      expect(previousSelector(mockedState)).toEqual(prev);
    });
  });

  describe('selectLocationState', () => {
    const locationStateSelector = selectLocationState();

    it('should select the route as a plain JS object', () => {
      const route = fromJS({
        locationBeforeTransitions: null,
      });
      const mockedState = fromJS({
        route,
      });

      expect(locationStateSelector(mockedState)).toEqual(route.toJS());
    });
  });
});

