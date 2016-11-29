import {
  playNext,
  playPrevious,
  playSong,
  pauseSong,
} from '../actions';

import {
  NEXT_SONG,
  PREVIOUS_SONG,
  PLAY_SONG,
  PAUSE_SONG,
} from '../constants';

describe('<Player /> - actions', () => {
  let key, audio;

  beforeEach(() => {
    key = 1;
    audio = {};
  });

  it('has a type of NEXT_SONG', () => {
    const expected = {
      type: NEXT_SONG,
      key,
      audio,
    };

    expect(playNext(key, audio)).toEqual(expected);
  });

  it('has a type of PREVIOUS_SONG', () => {
    const expected = {
      type: PREVIOUS_SONG,
      key,
      audio,
    };

    expect(playPrevious(key, audio)).toEqual(expected);
  });

  it('has a type of PLAY_SONG', () => {
    const expected = {
      type: PLAY_SONG,
      audio,
    };

    expect(playSong(audio)).toEqual(expected);
  });

  it('has a type of PAUSE_SONG', () => {
    const expected = {
      type: PAUSE_SONG,
      audio,
    };

    expect(pauseSong(audio)).toEqual(expected);
  });
});
