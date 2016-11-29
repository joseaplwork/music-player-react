/*
 *
 * App selectors
 *
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading'),
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error'),
);

const selectSongs = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('songs'),
);

const selectNext = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['currentSong', 'next']),
);

const selectPrevious = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['currentSong', 'prev']),
);

const selectCurrentSong = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['currentSong', 'song']),
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectLoading,
  selectError,
  selectSongs,
  selectCurrentSong,
  selectNext,
  selectPrevious,
  selectLocationState,
};
