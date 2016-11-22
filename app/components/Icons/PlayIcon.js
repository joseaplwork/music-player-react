import React from 'react';
import styles from './icons.scss';

const PlayIcon = (props) => {
  const { className, inverted } = props;
  const classes = className ? [styles.icon, className] : [styles.icon];

  if (inverted) classes.push(styles.inverted);

  return (
    <div className={classes.join(' ')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512">
        <path d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM151.172,128.000 L151.172,384.000 L406.907,256.000 L151.172,128.000 Z" />
      </svg>
    </div>
  );
};

PlayIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default PlayIcon;
