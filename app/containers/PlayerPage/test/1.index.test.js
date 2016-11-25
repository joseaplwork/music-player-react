import React from 'react';
import { shallow } from 'enzyme';
import Main from 'MP/components/Main';

import { PlayerPage } from '../index';

describe('<PlayerPage />', () => {
  it('should render the Main component', () => {
    const renderedComponent = shallow(
      <PlayerPage />
    );

    expect(renderedComponent.find(Main).length).toEqual(1);
  });
});
