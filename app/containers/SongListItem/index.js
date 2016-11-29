import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { setCurrentSong } from './actions';
import styles from './styles.scss';

export const SongListItem = (props) => {
  const { item, id, onClick } = props;

  if (!item) return null;

  return (
    <li className={styles.wrapper}>
      <a tabIndex="0" onClick={() => onClick(id)}>
        <div className={styles.thumb}>
          <img src={item.artworkUrl30} alt={item.artistName} />
        </div>
        <div className={styles.description}>
          <strong>{item.trackName}</strong>
          <p>{item.artistName}</p>
          <div className={styles.secondary}>
            <i>{item.collectionName}</i>
            <p>{item.primaryGenreName}</p>
          </div>
        </div>
        <div className={styles.extra}>
          <span>{item.releaseDate}</span>
          <span>{item.trackTimeMillis}</span>
          <span>{item.trackPrice}</span>
        </div>
      </a>
    </li>
  );
};

SongListItem.propTypes = {
  item: React.PropTypes.object,
  id: React.PropTypes.number,
  onClick: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onClick: (id) => {
      dispatch(setCurrentSong(id));
      browserHistory.push('/player');
    },
  };
}

export default connect(null, mapDispatchToProps)(SongListItem);
