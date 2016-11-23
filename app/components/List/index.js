import React from 'react';
import styles from './styles.scss';

const List = (props) => {
  const { className, component, items } = props;
  const classes = className ? `${styles.ul} ${className}` : styles.ul;

  const ComponentToRender = component;
  let content = (<div></div>);

  if (items) {
    content = items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} id={index} />
    ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <section className={styles.wrapper}>
      <ul className={classes}>
        {content}
      </ul>
    </section>
  );
};

List.propTypes = {
  className: React.PropTypes.string,
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
