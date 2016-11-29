/**
 *
 * HomePage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Presentation from 'MP/components/Presentation';
import Header from 'MP/components/Header';
import Main from 'MP/components/Main';
import List from 'MP/components/List';
import SongListItem from 'MP/containers/SongListItem';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import SongsFilter from 'MP/containers/SongsFilter';
import { selectLoading, selectSongs } from 'MP/containers/App/selectors';
import { selectSearchStarted } from 'MP/containers/Searcher/selectors';
import { SearchIcon } from 'MP/components/Icons';

import messages from './messages';
import styles from './styles.scss';

export const HomePage = (props) => {
  const { loading, searchStarted, songs } = props;
  let indicator = null;
  let component = (<Presentation />);

  if (loading) indicator = (<LoadingIndicator className={styles.indicator} />);
  if (searchStarted) {
    component = null;

    if (!loading) {
      component = (
        <div className={styles.noResult}>
          <SearchIcon className={styles.iconSize} />
          <p><FormattedMessage {...messages.notResultsFound} /></p>
        </div>
      );

      if (songs.length) component = (<List className={styles.songsList} component={SongListItem} items={songs} />);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <SongsFilter className={styles.filter} />
      <Main className={styles.main}>
        {indicator}
        {component}
      </Main>
    </div>
  );
};

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  songs: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  searchStarted: React.PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  songs: selectSongs(),
  searchStarted: selectSearchStarted(),
});

export default connect(mapStateToProps)(HomePage);
