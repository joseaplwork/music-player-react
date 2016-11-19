import React from 'react';
import { FormattedMessage } from 'react-intl';

import { LogoIcon, SearchIcon } from 'MP/components/Icons';
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
          <div className={styles.searcherPart}>
            <SearchIcon inverted className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchBar} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
