import React from 'react';
import { shallow, mount } from 'enzyme';

import { playNext, playPrevious, playSong, pauseSong } from '../actions';
import { Player, mapDispatchToProps } from '../index';

describe('<Player />', () => {
  let props;

  beforeEach(() => {
    props = {
      prev: 0,
      next: 2,
      playing: false,
      available: true,
      triggerPauseSong: jasmine.createSpy('triggerPauseSong'),
      triggerPlaySong: jasmine.createSpy('triggerPlaySong'),
      triggerNext: jasmine.createSpy('triggerNext'),
      triggerPrevious: jasmine.createSpy('triggerPrevious'),
      song: {},
    };
  });

  it('should render the SearchIcon component', () => {
    const renderedComponent = shallow(
      <Player {...props} />
    );

    expect(renderedComponent.length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    describe('triggerPauseSong', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.triggerPauseSong).toBeDefined();
      });

      it('should dispatch triggerPauseSong when called', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const audio = {};
        const result = mapDispatchToProps(dispatch);

        result.triggerPauseSong(audio);
        expect(dispatch).toHaveBeenCalledWith(pauseSong(audio));
      });
    });

    describe('triggerPlaySong', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.triggerPlaySong).toBeDefined();
      });

      it('should dispatch triggerPlaySong when called', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const audio = {};
        const result = mapDispatchToProps(dispatch);

        result.triggerPlaySong(audio);
        expect(dispatch).toHaveBeenCalledWith(playSong(audio));
      });
    });

    describe('triggerNext', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.triggerNext).toBeDefined();
      });

      it('should dispatch triggerNext when called', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const key = 0;
        const audio = {};
        const result = mapDispatchToProps(dispatch);

        result.triggerNext(key, audio);
        expect(dispatch).toHaveBeenCalledWith(playNext(key, audio));
      });
    });

    describe('triggerPrevious', () => {
      it('should be injected', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const result = mapDispatchToProps(dispatch);
        expect(result.triggerPrevious).toBeDefined();
      });

      it('should dispatch triggerPrevious when called', () => {
        const dispatch =  jasmine.createSpy('dispatch');
        const key = 0;
        const audio = {};
        const result = mapDispatchToProps(dispatch);

        result.triggerPrevious(key, audio);
        expect(dispatch).toHaveBeenCalledWith(playPrevious(key, audio));
      });
    });
  });
});