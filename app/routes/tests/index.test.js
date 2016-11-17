/**
 * Test routes
 */

import configureStore from 'MP/store';
import createRoutes from 'MP/routes';
import { browserHistory } from 'react-router';

describe('Routes creator', () => {
  let store, routes;

  beforeEach(() => {
    store = configureStore({}, browserHistory);
    routes = createRoutes(store);
  });

  it('should contain a property called `component`', () => {
    expect(routes.component).toBeDefined();
  });

  it('should contain a property called `childRoutes`', () => {
    expect(routes.childRoutes).toBeDefined();
  });
});
