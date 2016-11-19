import { render, shallow } from 'enzyme';
import React from 'react';
import LoadingIndicator from '../index';

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

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });
});
