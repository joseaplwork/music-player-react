/*
 *
 * Player actions
 *
 */
import {
  NEXT_SONG,
  PREVIOUS_SONG,
  PLAY_SONG,
  PAUSE_SONG,
} from './constants';

export function playNext(key, audio) {
  return {
    type: NEXT_SONG,
    key,
    audio,
  };
}

export function playPrevious(key, audio) {
  return {
    type: PREVIOUS_SONG,
    key,
    audio,
  };
}

export function playSong(audio) {
  return {
    type: PLAY_SONG,
    audio,
  };
}

export function pauseSong(audio) {
  return {
    type: PAUSE_SONG,
    audio,
  };
}
