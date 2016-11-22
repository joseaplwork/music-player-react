import React from 'react';
import styles from './styles.scss';

const List = (props) => {
  const { className } = props;
  const classes = className ? `${styles.wrapper} ${className}` : styles.wrapper;

  const ComponentToRender = props.component;
  let content = (<div></div>);

  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <section className={classes}>
      <ul className={styles.ul}>
        {content}
      </ul>
    </section>
  );
}

List.propTypes = {
  className: React.PropTypes.string,
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
