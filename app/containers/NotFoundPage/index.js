/*
 *
 * NotFoundPage
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import styles from './styles.scss';
import messages from './messages';

const NotFoundPage = () => (
  <article className={styles.base}>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  </article>
);

export default NotFoundPage;
