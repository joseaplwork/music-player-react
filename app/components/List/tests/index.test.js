import React from 'react';
import { mount, shallow } from 'enzyme';

import ListItem from 'components/ListItem';

import List from '../index';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = mount(
      <List component={ListItem} />
    );

    expect(renderedComponent.find(ListItem).length).toEqual(1);
  });

  it('should render the items', () => {
    const items = [
      'Hello',
      'World',
    ];
    const renderedComponent = mount(
      <List items={items} component={ListItem} />
    );

    expect(renderedComponent.find(ListItem).length).toEqual(2);
  });

  it('should contain className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <List className={className} component={ListItem} />
    );

    expect(renderedComponent.find('ul').hasClass(className)).toEqual(true);
  });
});
