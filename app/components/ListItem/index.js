import React from 'react';
import styles from './styles.scss';

function ListItem(props) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.item}>
        {props.item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
