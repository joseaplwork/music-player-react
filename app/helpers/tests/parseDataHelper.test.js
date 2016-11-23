import { filterSongs, toMinutes, toDate, toPrice, toPoster } from '../parseDataHelper';

describe('parseDataHelper helper', () => {
  const locale = 'es';
  const shape = {
    artistId: 'test',
    trackId: 'test',
    previewUrl: 'test',
    collectionName: 'test',
    collectionPrice: 'test',
    primaryGenreName: 'test',
    wrapperType: 'test',
    currency: 'USD',
    artistName: 'test',
    collectionCensoredName: 'test',
    kind: 'song',
    releaseDate: '2015-10-16T07:00:00Z',
    artworkUrl60: 'artworkUrl60x60bb',
    trackName: 'test',
    artworkUrl100: 'artworkUrl100x100bb',
    artworkUrl30: 'artworkUrl30x30bb',
    collectionId: 'test',
    trackPrice: 10,
    trackTimeMillis: 60000,
    trackCensoredName: 'test',
  };

  it('should filter songs with valid fields', () => {
    const expected = Object.assign({}, shape, { 
      artworkUrl30: toPoster('artworkUrl30x30bb', 'artworkUrl30'),
      artworkUrl60: toPoster('artworkUrl60x60bb', 'artworkUrl60'),
      artworkUrl100: toPoster('artworkUrl100x100bb', 'artworkUrl100'),
      trackTimeMillis: toMinutes(60000),
      trackPrice: toPrice(10, 'USD', locale),
      releaseDate: toDate('2015-10-16T07:00:00Z', locale),
    });

    expect(filterSongs({ results: [shape] }, locale)).toEqual([expected]);
  });
});