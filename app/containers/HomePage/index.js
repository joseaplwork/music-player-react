/**
 *
 * HomePage
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Presentation from 'MP/components/Presentation';
import Header from 'MP/components/Header';
import Main from 'MP/components/Main';
import LoadingIndicator from 'MP/components/LoadingIndicator';
import { selectLoading } from 'MP/containers/App/selectors';
import { selectSearchStarted } from 'MP/containers/Searcher/selectors';
import styles from './styles.scss';

export const HomePage = (props) => {
  const { loading, searchStarted } = props;
  let indicator = null;
  let component = (<Presentation />);

  if (loading) indicator = (<LoadingIndicator absolute className={styles.indicator} />);
  if (searchStarted) {
    component = (<div />);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main>
        {indicator}
        {component}
      </Main>
    </div>
  );
};

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  searchStarted: React.PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  searchStarted: selectSearchStarted(),
});

export default connect(mapStateToProps)(HomePage);
