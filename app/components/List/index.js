import React from 'react';
import styles from './styles.scss';

function List(props) {
  const { className } = props;
  const classes = [styles.wrapper];

  if (className) classes.push(className);

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
    <section className={classes.join(' ')}>
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
