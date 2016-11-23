import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router';

import SongListItem from '../index';

describe('<SongListItem />', () => {
  const item = {};

  it('should have a className', () => {
    const renderedComponent = mount(<SongListItem item={item} className="test" />);

    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should not render if there is not item', () => {
    const renderedComponent = shallow(
      <SongListItem />
    );
    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render Link element', () => {
    const renderedComponent = shallow(
      <SongListItem item={item} />
    );

    expect(renderedComponent.find(Link).length).toEqual(1);
  });
});
