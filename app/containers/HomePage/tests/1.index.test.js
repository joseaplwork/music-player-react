/**
 * Testing the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import { FormattedMessage } from 'react-intl';
import HomePage from '../index';
import Presentation from 'MP/components/Presentation';
import Main from 'MP/components/Main';

describe('<HomePage />', () => {
  const renderedComponent = shallow(
    <HomePage />
  );

  it('should render the Main component', () => {
    expect(renderedComponent.find(Main).length).toEqual(1);
  });

  it('should render the Presentation component', () => {
    expect(renderedComponent.find(Presentation).length).toEqual(1);
  });
});
