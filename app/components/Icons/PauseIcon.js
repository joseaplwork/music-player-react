import React from 'react';
import styles from './icons.scss';

const PauseIcon = (props) => {
  const { className, inverted } = props;
  const classes = className ? [styles.icon, className] : [styles.icon];

  if (inverted) classes.push(styles.inverted);

  return (
    <div className={classes.join(' ')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 25 25"
        viewBox="0 0 25 25">
        <g fillRule="evenodd" stroke="none" strokeWidth="1">
          <g>
            <path d="M12.5,25 C19.4035594,25 25,19.4035594 25,12.5 C25,5.59644063 19.4035594,0 12.5,0 C5.59644063,0 0,5.59644063 0,12.5 C0,19.4035594 5.59644063,25 12.5,25 L12.5,25 Z M9,7.99028109 C9,7.44336395 9.44386482,7 10,7 C10.5522847,7 11,7.45126428 11,7.99028109 L11,17.1686545 C11,17.7155716 10.5561352,18.1589355 10,18.1589355 C9.44771525,18.1589355 9,17.7076713 9,17.1686545 L9,7.99028109 L9,7.99028109 Z M14,7.99028109 C14,7.44336395 14.4438648,7 15,7 C15.5522847,7 16,7.45126428 16,7.99028109 L16,17.1686545 C16,17.7155716 15.5561352,18.1589355 15,18.1589355 C14.4477153,18.1589355 14,17.7076713 14,17.1686545 L14,7.99028109 L14,7.99028109 Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

PauseIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default PauseIcon;
