import {
  setCurrentSong,
} from '../actions';

import {
  CURRENT_SONG,
} from '../constants';

describe('<SongListItem /> - actions', () => {
  it('has a type of CHANGE_INPUT', () => {
    const expected = {
      type: CURRENT_SONG,
      key: 1,
    };

    expect(setCurrentSong(1)).toEqual(expected);
  });
});
