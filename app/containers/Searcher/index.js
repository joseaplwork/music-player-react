/*
 *
 * Searcher
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { SearchIcon } from 'MP/components/Icons';
import { loadSongs, changeSearchInput } from './actions';
import styles from './styles.scss';

export class Searcher extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { className, onInputChange } = this.props;
    const classes = className ? `${styles.wrapper} ${className}` : styles.wrapper;

    return (
      <div className={classes}>
        <SearchIcon inverted className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchBar}
          onChange={onInputChange}
          />
      </div>
    );
  }
}

Searcher.propTypes = {
  className: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onInputChange: (evt) => {
      dispatch(changeSearchInput(encodeURIComponent(evt.target.value)));
      dispatch(loadSongs());
    },
  };
}

export default connect(null, mapDispatchToProps)(Searcher);
