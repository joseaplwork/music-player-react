/*
 *
 * Player selectors
 *
 */

import { createSelector } from 'reselect';

const selectPlayer = () => (state) => state.get('player');

const selectPlaying = () => createSelector(
  selectPlayer(),
  (playerState) => playerState.get('playing'),
);

const selectAvailable = () => createSelector(
  selectPlayer(),
  (playerState) => playerState.get('available'),
);


export {
  selectPlayer,
  selectPlaying,
  selectAvailable,
};
