import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router';

import { setCurrentSong } from '../actions';
import { SongListItem, mapDispatchToProps } from '../index';

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

  it('should render <a> element', () => {
    const renderedComponent = shallow(
      <SongListItem item={item} />
    );

    expect(renderedComponent.find('a').length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    describe('onClick', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onClick).toBeDefined();
      });
    });

    it('should dispatch onClick when called', () => {
      const dispatch =  jasmine.createSpy('dispatch');
      const result = mapDispatchToProps(dispatch);

      result.onClick(1);
      expect(dispatch).toHaveBeenCalledWith(setCurrentSong(1));
    });
  });
});
