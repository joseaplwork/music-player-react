/*
 *
 * LanguageProvider
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { selectLocale } from './selectors';

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, locale, messages } = this.props;

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        {React.Children.only(children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.shape({}),
  children: React.PropTypes.element.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  locale: selectLocale(),
});

export default connect(mapStateToProps)(LanguageProvider);
