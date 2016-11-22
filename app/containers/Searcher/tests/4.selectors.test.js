import { fromJS } from 'immutable';

import {
  selectSearcher,
  selectSearcherInputValue,
  selectSearchStarted,
} from '../selectors';

describe('<Searcher /> - selectors', () => {
  describe('selectSearcher', () => {
    const searcherSelector = selectSearcher();

    it('should select the searcher state', () => {
      const searcherState = fromJS({});
      const mockedState = fromJS({
        searcher: searcherState,
      });
      expect(searcherSelector(mockedState)).toEqual(searcherState);
    });
  });

  describe('selectSearcherInputValue', () => {
    const searcherInputValueSelector = selectSearcherInputValue();

    it('should select the searchInputValue state', () => {
      const searchInputValue = 'test';
      const mockedState = fromJS({
        searcher: {
          searchInputValue: searchInputValue,
        },
      });
      expect(searcherInputValueSelector(mockedState)).toEqual(searchInputValue);
    });
  });

  describe('selectSearchStarted', () => {
    const searchStartedSelector = selectSearchStarted();

    it('should select the searchStarted state', () => {
      const searchStarted = true;
      const mockedState = fromJS({
        searcher: {
          searchStarted: searchStarted,
        },
      });
      expect(searchStartedSelector(mockedState)).toEqual(searchStarted);
    });
  });
});
