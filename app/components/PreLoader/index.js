import React from 'react';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import styles from './styles.scss';

const PreLoader = () => (
  <div id="preLoader" className={styles.base}>
    <LoadingIndicator className={styles.svg} />
  </div>
);

export default PreLoader;
