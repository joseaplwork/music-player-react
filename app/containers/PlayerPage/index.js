/**
 *
 * PlayerPage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Main from 'MP/components/Main';
import { selectSongs } from 'MP/containers/App/selectors';

import styles from './styles.scss';

export const PlayerPage = (props) => {
  const { songs } = props;
  console.log(songs);

  return (
    <div className={styles.wrapper}>
      <Main></Main>
    </div>
  );
};

PlayerPage.propTypes = {
  songs: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export const mapStateToProps = createStructuredSelector({
  songs: selectSongs(),
});

export default connect(mapStateToProps)(PlayerPage);
