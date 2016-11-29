import {
  playNext,
  playPrevious,
  playSong,
  pauseSong,
} from '../actions';

import { fromJS } from 'immutable';

import playerReducer, { initialState } from '../reducer';
import {
  CHANGE_INPUT,
} from '../constants';

describe('<Player /> - reducer', () => {
  let state, key, audio;

  beforeEach(() => {
    state = initialState;
    key = 1;
    audio = {
      play: jasmine.createSpy('play'),
      pause: jasmine.createSpy('pause'),
    }
  });

  it('should return the initial state', () => {
    const expected = state;

    expect(playerReducer(undefined, {}).toJS()).toEqual(expected.toJS());
  });

  it('should reset state when next or previous action is called', () => {
    const mockedState = state
      .set('available', true)
      .set('playing', true);

    expect(playerReducer(mockedState, playNext(key, audio)).toJS()).toEqual(state.toJS());
    expect(playerReducer(mockedState, playPrevious(key, audio)).toJS()).toEqual(state.toJS());
    expect(audio.pause).toHaveBeenCalled();
  });

  it('should stop playing when pause action is called', () => {
    const mockedState = state
      .set('available', true)
      .set('playing', true);

    const expected = mockedState
      .set('playing', false);

    expect(playerReducer(mockedState, pauseSong(audio)).toJS()).toEqual(expected.toJS());
    expect(audio.pause).toHaveBeenCalled();
  });

  it('should play when play action is called', () => {
    const mockedState = state
      .set('available', true)
      .set('playing', false);

    const expected = mockedState
      .set('playing', true);

    expect(playerReducer(mockedState, playSong(audio)).toJS()).toEqual(expected.toJS());
    expect(audio.play).toHaveBeenCalled();
  });
});