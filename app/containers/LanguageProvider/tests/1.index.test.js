import LanguageProvider from '../index';

import { shallow } from 'enzyme';
import { FormattedMessage, defineMessages } from 'react-intl';
import configureStore from 'MP/store';
import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { translationMessages } from 'MP/helpers/i18nHelper';

describe('<LanguageProvider />', () => {
  let store;

  beforeEach(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render the default language messages', () => {
    const messages = defineMessages({
      someMessage: {
        id: 'some.id',
        defaultMessage: 'This is some default message',
      },
    });
    const renderedComponent = shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </LanguageProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toEqual(true);
  });
});
