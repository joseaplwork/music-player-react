/*
 *
 * SongsFilter
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { selectSongs } from 'MP/containers/App/selectors';

import { FILTER_DURATION, FILTER_GENDER, FILTER_PRICE, NO_FILTER } from './constants';
import { triggerFilter } from './actions';
import messages from './messages';
import styles from './styles.scss';

export class SongsFilter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className, songs, onFilter } = this.props;
    const classes = className ? `${styles.wrapper} ${className}` : styles.wrapper;

    if (!songs.length) return null;

    return (
      <div className={classes}>
        <ul>
          <li>
            <a tabIndex="0" onClick={() => onFilter(NO_FILTER)}><FormattedMessage {...messages.noFilter} /></a>
          </li>
          <li>
            <a tabIndex="0" onClick={() => onFilter(FILTER_DURATION)}><FormattedMessage {...messages.duration} /></a>
          </li>
          <li>
            <a tabIndex="0" onClick={() => onFilter(FILTER_GENDER)}><FormattedMessage {...messages.gender} /></a>
          </li>
          <li>
            <a tabIndex="0" onClick={() => onFilter(FILTER_PRICE)}><FormattedMessage {...messages.price} /></a>
          </li>
        </ul>
      </div>
    );
  }
}

SongsFilter.propTypes = {
  className: React.PropTypes.string,
  onFilter: React.PropTypes.func,
  songs: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export const mapStateToProps = createStructuredSelector({
  songs: selectSongs(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFilter: (constant) => {
      dispatch(triggerFilter(constant));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsFilter);
