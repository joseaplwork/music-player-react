import React from 'react';
import styles from './icons.scss';

const BackIcon = (props) => {
  const { className, inverted } = props;
  const classes = className ? [styles.icon, className] : [styles.icon];

  if (inverted) classes.push(styles.inverted);

  return (
    <div className={classes.join(' ')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 256 256"
        viewBox="0 0 256 256">
        <path d="M149.974,191.146c-1.638,0-3.276-0.625-4.524-1.875l-56.748-56.746c-2.5-2.499-2.5-6.552,0-9.05l56.748-56.747  c2.496-2.5,6.553-2.5,9.049,0c2.5,2.499,2.5,6.552,0,9.05L102.278,128l52.22,52.222c2.5,2.499,2.5,6.552,0,9.05  C153.25,190.521,151.611,191.146,149.974,191.146z M256,128C256,57.42,198.58,0,128,0C57.42,0,0,57.42,0,128  c0,70.58,57.42,128,128,128C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2  c-63.522,0-115.2-51.679-115.2-115.2C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z" />
      </svg>
    </div>
  );
};

BackIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default BackIcon;
