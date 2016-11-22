import React from 'react';
import styles from './styles.scss';

const ListItem = (props) => {
  const { item } = props;

  return (
    <li className={styles.wrapper}>
      <div className={styles.item}>
        {item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
