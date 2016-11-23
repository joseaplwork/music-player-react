/**
 *
 * HomePage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Presentation from 'MP/components/Presentation';
import Header from 'MP/components/Header';
import Main from 'MP/components/Main';
import List from 'MP/components/List';
import SongListItem from 'MP/components/SongListItem';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import { selectLoading, selectSongs } from 'MP/containers/App/selectors';
import { selectSearchStarted } from 'MP/containers/Searcher/selectors';

import styles from './styles.scss';

export const HomePage = (props) => {
  const { loading, searchStarted, songs } = props;
  let indicator = null;
  let component = (<Presentation />);

  if (loading) indicator = (<LoadingIndicator className={styles.indicator} />);
  if (searchStarted) {
    component = null;
    if (!loading) component = (<List className={styles.songsList} component={SongListItem} items={songs} />);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main>
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
