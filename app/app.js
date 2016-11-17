// Needed for redux-saga es6 generator support
import 'babel-polyfill';

/* eslint-disable */
import '!file?name=[name].[ext]!./launcher/icon-1x.png';
import '!file?name=[name].[ext]!./launcher/icon-2x.png';
import '!file?name=[name].[ext]!./launcher/icon-3x.png';
import '!file?name=[name].[ext]!./launcher/icon-4x.png';
import 'file?name=[name].[ext]!./favicon.ico';
import '!file?name=[name].[ext]!./manifest.json';
/* eslint-enable */

import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import configureStore from 'MP/store';
import LocaleProvider from 'MP/containers/LanguageProvider';
import { selectLocationState } from 'MP/containers/App/selectors';
import { translationMessages } from 'MP/helpers/i18nHelper';
import createRoutes from 'MP/routes';
import 'MP/containers/App/styles.scss';

const robotoObserver = new FontFaceObserver('Roboto');

/* global document */
robotoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider messages={messages}>
        <Router
          history={history}
          routes={createRoutes(store)}
          render={
            applyRouterMiddleware(useScroll())
          }
        />
      </LocaleProvider>
    </Provider>,
    document.getElementById('app'),
  );
};
render(translationMessages);

// Install ServiceWorker and AppCache
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
