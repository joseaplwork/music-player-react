import React from 'react';
import { shallow } from 'enzyme';

import {
  NO_FILTER,
  FILTER_DURATION,
  FILTER_PRICE,
  FILTER_GENDER,
} from '../constants';
import { triggerFilter } from '../actions';
import { SongsFilter, mapDispatchToProps } from '../index';

describe('<SongsFilter />', () => {
  let songs;

  beforeEach(() => {
    songs = [{
      trackName: 'test',
    }];    
  });

  it('should have className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <SongsFilter className={className} songs={songs} />
    );

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should return null if there is not songs', () => {
    const renderedComponent = shallow(
      <SongsFilter songs={false}/>
    );

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should trigger NOT_FILTER when clicked', () => {
    const spy =  jasmine.createSpy('spy');
    const renderedComponent = shallow(
      <SongsFilter onFilter={spy} songs={songs}/>
    );

    renderedComponent.find('a').first().simulate('click');
    expect(spy).toHaveBeenCalledWith(NO_FILTER);
  });

  it('should trigger FILTER_DURATION when clicked', () => {
    const spy =  jasmine.createSpy('spy');
    const renderedComponent = shallow(
      <SongsFilter onFilter={spy} songs={songs}/>
    );

    renderedComponent.find('a').at(1).simulate('click');
    expect(spy).toHaveBeenCalledWith(FILTER_DURATION);
  });

  it('should trigger FILTER_GENDER when clicked', () => {
    const spy =  jasmine.createSpy('spy');
    const renderedComponent = shallow(
      <SongsFilter onFilter={spy} songs={songs}/>
    );

    renderedComponent.find('a').at(2).simulate('click');
    expect(spy).toHaveBeenCalledWith(FILTER_GENDER);
  });

  it('should trigger FILTER_PRICE when clicked', () => {
    const spy =  jasmine.createSpy('spy');
    const renderedComponent = shallow(
      <SongsFilter onFilter={spy} songs={songs}/>
    );

    renderedComponent.find('a').last().simulate('click');
    expect(spy).toHaveBeenCalledWith(FILTER_PRICE);
  });

  describe('mapDispatchToProps', () => {
    describe('onFilter', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.onFilter).toBeDefined();
      });
    });

    it('should dispatch onFilter when called', () => {
      const dispatch =  jasmine.createSpy('dispatch');
      const result = mapDispatchToProps(dispatch);

      result.onFilter(FILTER_PRICE);
      expect(dispatch).toHaveBeenCalledWith(triggerFilter(FILTER_PRICE));
    });
  });
});