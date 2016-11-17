/**
 * Testing the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import { FormattedMessage } from 'react-intl';
import { shape } from '../messages';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the Home Page text', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <h1>
        <FormattedMessage {...shape.hello}/>
      </h1>)).toEqual(true);
  });
});
