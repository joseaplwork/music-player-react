import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { browserHistory } from 'react-router';
import { FormattedMessage, defineMessages } from 'react-intl';

import configureStore from 'MP/store';
import { translationMessages } from 'MP/helpers/i18nHelper';

import DefaultLanguageProvider, { LanguageProvider } from '../index';

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
        <DefaultLanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </DefaultLanguageProvider>
      </Provider>
    );

    expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toEqual(true);
  });


  it('should render the default language messages', () => {
    const messages = defineMessages({
      someMessage: {
        id: 'some.id',
        defaultMessage: 'This is some default message',
      },
    });
    const renderedComponent = shallow(
      <LanguageProvider locale={'es'} messages={translationMessages}>
        <FormattedMessage {...messages.someMessage} />
      </LanguageProvider>
    );

    expect(renderedComponent.find(IntlProvider).length).toEqual(1);
  });
});
