import React from 'react';
import { FormattedMessage } from 'react-intl';

import { LogoIcon } from 'MP/components/Icons';
import Searcher from 'MP/containers/Searcher';
import messages from './messages';
import styles from './styles.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logoPart}>
            <div>
              <LogoIcon inverted />
            </div>
            <div className={styles.currentPage}>
              <FormattedMessage {...messages.listenNow} />
            </div>
          </div>
          <Searcher className={styles.searcherPart} />
        </div>
      </header>
    );
  }
}

export default Header;
