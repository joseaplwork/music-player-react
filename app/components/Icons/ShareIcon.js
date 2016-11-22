import React from 'react';
import styles from './icons.scss';

const ShareIcon = (props) => {
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
        <g>
          <path d="M94,350c-51.8,0-94-42.2-94-94c0-51.8,42.2-94,94-94c51.8,0,94,42.2,94,94C188,307.8,145.8,350,94,350z    M94,183.1c-40.2,0-72.9,32.7-72.9,72.9c0,40.2,32.7,72.9,72.9,72.9c40.2,0,72.9-32.7,72.9-72.9C166.9,215.8,134.2,183.1,94,183.1z   " />
          <path d="M418,196.3c-51.8,0-94-42.2-94-94c0-51.8,42.2-94,94-94c51.8,0,94,42.2,94,94   C512,154.1,469.8,196.3,418,196.3z M418,29.4c-40.2,0-72.9,32.7-72.9,72.9c0,40.2,32.7,72.9,72.9,72.9s72.9-32.7,72.9-72.9   C490.9,62.1,458.2,29.4,418,29.4z" />
          <path d="M418,503.7c-51.8,0-94-42.2-94-94c0-51.8,42.2-94,94-94c51.8,0,94,42.2,94,94   C512,461.5,469.8,503.7,418,503.7z M418,336.8c-40.2,0-72.9,32.7-72.9,72.9c0,40.2,32.7,72.9,72.9,72.9s72.9-32.7,72.9-72.9   C490.9,369.5,458.2,336.8,418,336.8z" />
          <path d="M161.7,217.8c-4,0-7.9-2.3-9.6-6.3c-2.4-5.3,0-11.6,5.3-13.9l172.8-76.9c5.3-2.4,11.6,0,13.9,5.3   c2.4,5.3,0,11.6-5.3,13.9L166,216.9C164.6,217.5,163.2,217.8,161.7,217.8z" />
          <path d="M334.6,392.2c-1.5,0-3-0.3-4.4-1L159,311.9c-5.3-2.4-7.6-8.7-5.1-14s8.7-7.6,14-5.1L339,372.1   c5.3,2.4,7.6,8.7,5.1,14C342.3,389.9,338.5,392.2,334.6,392.2z" />
        </g>
      </svg>
    </div>
  );
};

ShareIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default ShareIcon;
