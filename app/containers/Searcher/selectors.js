/*
 *
 * Searcher selectors
 *
 */

import { createSelector } from 'reselect';

const selectSearcher = () => (state) => state.get('searcher');

const selectSearcherInputValue = () => createSelector(
  selectSearcher(),
  (searcherState) => searcherState.get('searchInputValue'),
);

const selectSearchStarted = () => createSelector(
  selectSearcher(),
  (searcherState) => searcherState.get('searchStarted'),
);

export {
  selectSearcher,
  selectSearcherInputValue,
  selectSearchStarted,
};
