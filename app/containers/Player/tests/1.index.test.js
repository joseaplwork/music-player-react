import React from 'react';
import { shallow, mount } from 'enzyme';

import { NextIcon, PreviousIcon, PlayIcon, PauseIcon } from 'MP/components/Icons';

import styles from '../styles.scss';
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

  it('should contain className attribute', () => {
    const className = 'test';
    props.className = className;
    const renderedComponent = shallow(
      <Player {...props} />
    );

    expect(renderedComponent.hasClass(className)).toEqual(true);
  });

  it('should display play icon if audio not playing', () => {
    const renderedComponent = shallow(
      <Player {...props} />
    );

    expect(renderedComponent.find(PlayIcon).length).toEqual(1);
  });

  it('should display pause icon if audio playing', () => {
    props.playing = true;
    const renderedComponent = shallow(
      <Player {...props} />
    );

    expect(renderedComponent.find(PauseIcon).length).toEqual(1);
  });

  it('should disable previous and next button if invalid', () => {
    props.prev = null;
    props.next = null;
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const elements = renderedComponent.find(`.${styles.controls} a`);

    expect(elements.first().hasClass(styles.disabled)).toEqual(true);
    expect(elements.last().hasClass(styles.disabled)).toEqual(true);
  });

  it('should trigger triggerPrevious when clicked', () => {
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const elements = renderedComponent.find(`.${styles.controls} a`);
    elements.first().simulate('click');

    expect(props.triggerPrevious).toHaveBeenCalled();
  });

  it('should trigger triggerNext when clicked', () => {
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const elements = renderedComponent.find(`.${styles.controls} a`);
    elements.last().simulate('click');

    expect(props.triggerNext).toHaveBeenCalled();
  });

  it('should trigger triggerPlaySong when clicked', () => {
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const element = renderedComponent.find(`.${styles.player} a`);
    element.simulate('click');

    expect(props.triggerPlaySong).toHaveBeenCalled();
  });

  it('should trigger triggerPauseSong when clicked', () => {
    props.playing = true;
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const element = renderedComponent.find(`.${styles.player} a`);
    element.simulate('click');

    expect(props.triggerPauseSong).toHaveBeenCalled();
  });

  it('should disable play button if audio is not available', () => {
    props.available = false;
    const renderedComponent = shallow(
      <Player {...props} />
    );
    const element = renderedComponent.find(`.${styles.player} a`);
    expect(element.hasClass(styles.disabled)).toEqual(true);
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