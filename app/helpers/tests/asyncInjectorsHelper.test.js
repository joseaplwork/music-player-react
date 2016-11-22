import 'babel-polyfill';
import { fromJS } from 'immutable';
import { memoryHistory } from 'react-router';
import { put } from 'redux-saga/effects';

import configureStore from 'MP/store';

import {
  injectAsyncReducer,
  injectAsyncSagas,
  asyncInjectorsHelper,
} from '../asyncInjectorsHelper';

const initialState = fromJS({ reduced: 'soon' });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state.set('reduced', action.payload);
    default:
      return state;
  }
};

function* testSaga() {
  yield put({ type: 'TEST', payload: 'yup' });
}

const sagas = {
  testSaga,
};

describe('AsyncInjectors helper', () => {
  let store;

  describe('asyncInjectorsHelper', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
    });

    it('given a store, should return all async injectors', () => {
      const { injectReducer, injectSagas } = asyncInjectorsHelper(store);

      injectReducer({reducer});
      injectSagas(sagas);

      const actual = store.getState().get('reducer');
      const expected = initialState.merge({ reduced: 'yup' });

      expect(actual.toJS()).toEqual(expected.toJS());
    });

    it('should throw if passed invalid store shape', () => {
      let result = false;

      Reflect.deleteProperty(store, 'dispatch');

      try {
        asyncInjectorsHelper(store);
      } catch (err) {
        result = err.name === 'Invariant Violation';
      }

      expect(result).toEqual(true);
    });
  });

  describe('Saga and Reducer helpers', () => {
    beforeEach(() => {
      store = configureStore({}, memoryHistory);
    });

    describe('injectAsyncReducer', () => {
      it('given a store, it should provide a function to inject a reducer', () => {
        const injectReducer = injectAsyncReducer(store);

        injectReducer({reducer});

        const actual = store.getState().get('reducer');
        const expected = initialState;

        expect(actual.toJS()).toEqual(expected.toJS());
      });

      it('should throw if passed invalid object with reducers', () => {
        let result = false;

        const injectReducer = injectAsyncReducer(store);

        try {
          injectReducer([]);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        try {
          injectReducer('');
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toEqual(true);
      });
    });

    describe('injectAsyncSagas', () => {
      it('given a store, it should provide a function to inject a saga', () => {
        const injectSagas = injectAsyncSagas(store);
        const injectReducer = injectAsyncReducer(store);

        injectReducer({reducer});
        injectSagas(sagas);

        const actual = store.getState().get('reducer');
        const expected = initialState.merge({ reduced: 'yup' });

        expect(actual.toJS()).toEqual(expected.toJS());
      });

      it('should throw if passed invalid saga', () => {
        let result = false;

        const injectSagas = injectAsyncSagas(store);

        try {
          injectSagas([]);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        try {
          injectSagas('');
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toEqual(true);
      });
    });
  });
});
