import { fromJS } from 'immutable';

import {
  selectGlobal,
  selectLoading,
  selectError,
  selectLocationState,
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

