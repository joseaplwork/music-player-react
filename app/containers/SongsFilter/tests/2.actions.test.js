import {
  triggerFilter,
} from '../actions';

import {
  NO_FILTER,
  FILTER_PRICE,
  FILTER_GENDER,
  FILTER_DURATION,
} from '../constants';

describe('<SongsFilter /> - actions', () => {
  it('has a type of NO_FILTER, FILTER_DURATION, FILTER_PRICE, FILTER_GENDER', () => {
    const expected1 = {
      type: NO_FILTER,
    };

    const expected2 = {
      type: FILTER_PRICE,
    };

    const expected3 = {
      type: FILTER_GENDER,
    };

    const expected4 = {
      type: FILTER_DURATION,
    };


    expect(triggerFilter(NO_FILTER)).toEqual(expected1);
    expect(triggerFilter(FILTER_PRICE)).toEqual(expected2);
    expect(triggerFilter(FILTER_GENDER)).toEqual(expected3);
    expect(triggerFilter(FILTER_DURATION)).toEqual(expected4);
  });
});
