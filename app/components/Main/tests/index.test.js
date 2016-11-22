import React from 'react';
import { shallow } from 'enzyme';

import Main from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Main {...props}>
    {children}
  </Main>
);

describe('<Main />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.find('main').contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });
});
