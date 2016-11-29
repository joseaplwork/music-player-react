import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import Player from 'MP/containers/Player';
import Main from 'MP/components/Main';

import { PlayerPage } from '../index';

describe('<PlayerPage />', () => {
  it('should render the Main component', () => {
    const renderedComponent = shallow(
      <PlayerPage songs={false}/>
    );

    expect(renderedComponent.find(Main).length).toEqual(1);
  });

  it('should render Link component to HomePage', () => {
    const renderedComponent = shallow(
      <PlayerPage songs={false}/>
    );

    expect(renderedComponent.find(Link).length).toEqual(1);
  });

  it('should render the Player component', () => {
    const songs = [{
      trackId: 123,
    }, {
      trackId: 456,
    }];
    const renderedComponent = shallow(
      <PlayerPage songs={songs}/>
    );

    expect(renderedComponent.find(Player).length).toEqual(1);
  });
});
