/**
 *
 * PlayerPage
 *
 */

import React from 'react';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Main from 'MP/components/Main';
import Player from 'MP/containers/Player';
import { selectSongs } from 'MP/containers/App/selectors';
import messages from 'MP/containers/Player/messages';

import styles from './styles.scss';

export const PlayerPage = (props) => {
  const { songs } = props;
  let component = (
    <Link to="/">
      <FormattedMessage {...messages.back} />
    </Link>
  );

  if (songs.length) component = (<Player />);

  return (
    <div className={styles.wrapper}>
      <Main>
        {component}
      </Main>
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
