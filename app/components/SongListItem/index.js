import React from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

export const SongListItem = (props) => {
  const { item, id } = props;

  if (!item) return null;

  return (
    <li className={styles.wrapper}>
      <Link to={`/player/${id}`}>
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
      </Link>
    </li>
  );
};

SongListItem.propTypes = {
  item: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default SongListItem;
