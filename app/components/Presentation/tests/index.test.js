/**
 * Testing the Presentation component
 */

import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { LogoIcon } from 'MP/components/Icons';
import Presentation from '../index';
import H1 from 'MP/components/H1';

describe('<Presentation />', () => {
  const renderedComponent = shallow(<Presentation />);

  it('should render the Presentation component', () => {
    expect(renderedComponent.find(LogoIcon).length).toEqual(1);
  });
  it('should render the Presentation component', () => {
    expect(renderedComponent.find(FormattedMessage).length).toEqual(1);
  });
});
