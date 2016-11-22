import { browserHistory } from 'react-router';

import configureStore from 'MP/store';
import { checkStore } from 'MP/helpers/asyncInjectorsHelper';

describe('Store configuration', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, browserHistory);
  });

  describe('Store', () => {
    it('should contain a valid store', () => {
      expect(checkStore(store)).toEqual(true);
    });
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toEqual('object');
    });
  });

  describe('asyncSagas', () => {
    it('should contain an object for async sagas', () => {
      expect(typeof store.asyncSagas).toEqual('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toEqual('function');
    });
  });
});
