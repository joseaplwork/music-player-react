import App from 'MP/containers/App';
import { asyncInjectorsHelper } from 'MP/helpers/asyncInjectorsHelper';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default function createRoutes(store) {
  // Create reusable async injectors using asyncInjectorsHelper factory
  const { injectReducer, injectSagas } = asyncInjectorsHelper(store); // eslint-disable-line no-unused-vars

  return {
    component: App,
    childRoutes: [
      {
        path: '/(index.html)',
        name: 'home',
        getComponent(location, cb) {
          const importModules = Promise.all([
            System.import('MP/containers/HomePage/reducer'),
            System.import('MP/containers/HomePage/sagas'),
            System.import('MP/containers/HomePage'),
          ]);

          const renderRoute = loadRoute(cb);

          importModules.then(([homeReducers, homeSagas, component]) => {
            injectReducer(homeReducers);
            injectSagas(homeSagas);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        path: '/player',
        name: 'player',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('MP/containers/PlayerPage/reducer'),
            System.import('MP/containers/PlayerPage'),
          ]);

          const renderRoute = loadRoute(cb);

          importModules.then(([playerReducer, component]) => {
            injectReducer(playerReducer);
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
          System.import('MP/containers/NotFoundPage')
            .then(loadRoute(cb))
            .catch(errorLoading);
        },
      },
    ],
  };
}
