import React from 'react';
import { FormattedMessage } from 'react-intl';

import { LogoIcon } from 'MP/components/Icons';
import H1 from 'MP/components/H1';
import messages from './messages';
import styles from './styles.scss';

const Presentation = () => (
  <section className={styles.wrapper}>
    <div>
      <LogoIcon className={styles.poster} />
    </div>
    <div>
      <H1>
        <FormattedMessage {...messages.listenNow} />
      </H1>
    </div>
  </section>
);

export default Presentation;
