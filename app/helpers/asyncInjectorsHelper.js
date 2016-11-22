import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';
import createReducer from 'MP/reducer';

/**
 * Validate the shape of redux store
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    asyncReducers: isObject,
    asyncSagas: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(helper) asyncInjectors: Expected a valid redux store'
  );

  return true;
}

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store, isValid) {
  return function injectReducer(asyncReducers) {
    if (!isValid) checkStore(store);

    invariant(
      isObject(asyncReducers),
      '(helper) injectAsyncReducer: Expected `asyncReducer` to be an object with reducer functions'
    );
    let shouldReplace = false;

    Object.keys(asyncReducers).forEach((key) => {
      if (!Reflect.has(store.asyncReducers, key)) {
        shouldReplace = true;
        store.asyncReducers[key] = asyncReducers[key]; // eslint-disable-line no-param-reassign
      }
    });

    if (shouldReplace) store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store, isValid) {
  return function injectSagas(asyncSagas) {
    if (!isValid) checkStore(store);

    invariant(
      isObject(asyncSagas),
      '(helper) injectAsyncSagas: Expected `asyncSagas` to be an object width generator functions'
    );

    Object.keys(asyncSagas).forEach((key) => {
      if (!Reflect.has(store.asyncSagas, key)) {
        // run saga if it's needed
        store.asyncSagas[key] = store.runSaga(asyncSagas[key]); // eslint-disable-line
      }
    });
  };
}

/**
 * Helper for creating injectors
 */
export function asyncInjectorsHelper(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
    injectSagas: injectAsyncSagas(store, true),
  };
}
