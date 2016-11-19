/**
 * Testing our Main component
 */

import Main from '../index';

import { shallow } from 'enzyme';
import React from 'react';

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
