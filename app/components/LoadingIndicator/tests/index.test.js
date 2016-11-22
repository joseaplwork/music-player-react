import React from 'react';
import { render, shallow } from 'enzyme';

import LoadingIndicator from '../index';
import styles from '../styles.scss';

describe('<LoadingIndicator />', () => {
  it('should render svg', () => {
    const renderedComponent = render(
      <LoadingIndicator />
    );

    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <LoadingIndicator className={className} />
    );

    expect(renderedComponent.find('svg').hasClass(className)).toEqual(true);
  });

  it('should contain absolute className', () => {
    const absolute = true;
    const renderedComponent = shallow(
      <LoadingIndicator absolute />
    );

    expect(renderedComponent.hasClass(styles.loaderAbsolute)).toEqual(true);
  });
});
