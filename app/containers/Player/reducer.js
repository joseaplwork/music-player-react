/*
 *
 * Player reducer
 *
 */

import { fromJS } from 'immutable';

import {
  PLAY_SONG,
  PAUSE_SONG,
  PREVIOUS_SONG,
  NEXT_SONG,
} from './constants';

export const initialState = fromJS({
  playing: false,
  available: false,
});

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PREVIOUS_SONG:
    case NEXT_SONG: {
      const { audio } = action;

      audio.pause();
      audio.currentTime = 0;

      return state
        .set('available', false)
        .set('playing', false);
    }
    case PAUSE_SONG: {
      action.audio.pause();
      return state
        .set('playing', false);
    }
    case PLAY_SONG: {
      action.audio.play();
      return state
        .set('available', true)
        .set('playing', true);
    }
    default:
      return state;
  }
}

export default playerReducer;

