import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { default as createReducer, routeReducer } from 'MP/reducer';

describe('Global reducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      locationBeforeTransitions: null,
    });
  });

  describe('Router reducer', () => {
    it('should return the initial state', () => {
      const expectedResult = state;

      expect(routeReducer(undefined, {})).toEqual(expectedResult);
    });

    it('should handle the routeReducer reducer correctly', () => {
      const expectedResult = state
        .set('locationBeforeTransitions', {});

      expect(routeReducer(undefined, { type: LOCATION_CHANGE, payload: {} }).toJS())
        .toEqual({'locationBeforeTransitions': {}});
    });
  });
});
