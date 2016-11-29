/*
 *
 * SongsListItem actions
 *
 */

import {
  CURRENT_SONG,
} from './constants';

export function setCurrentSong(key) {
  return {
    type: CURRENT_SONG,
    key,
  };
}
