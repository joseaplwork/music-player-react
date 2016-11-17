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
        path: '/',
        name: 'home',
        getComponent(location, cb) {
          const importModules = System.import('MP/containers/HomePage');

          const renderRoute = loadRoute(cb);

          importModules.then((component) => {
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
