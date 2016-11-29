import { fromJS } from 'immutable';

import {
  selectPlayer,
  selectPlaying,
  selectAvailable,
} from '../selectors';

describe('<Player /> - selectors', () => {
  describe('selectPlayer', () => {
    const playerSelector = selectPlayer();

    it('should select the player state', () => {
      const playerState = fromJS({});
      const mockedState = fromJS({
        player: playerState,
      });
      expect(playerSelector(mockedState)).toEqual(playerState);
    });
  });

  describe('selectPlaying', () => {
    const playingSelector = selectPlaying();

    it('should select the playing state', () => {
      const playingState = true;
      const mockedState = fromJS({
        player: {
          playing: playingState,
        },
      });
      expect(playingSelector(mockedState)).toEqual(playingState);
    });
  });

  describe('selectAvailable', () => {
    const availableSelector = selectAvailable();

    it('should select the playing state', () => {
      const availableState = true;
      const mockedState = fromJS({
        player: {
          available: availableState,
        },
      });
      expect(availableSelector(mockedState)).toEqual(availableState);
    });
  });
});
