import { filterSongs } from '../parseDataHelper';

describe('parseDataHelper helper', () => {
  const shape = {
    artistId: 'test',
    trackId: 'test',
    previewUrl: 'test',
    collectionName: 'test',
    collectionPrice: 'test',
    primaryGenreName: 'test',
    wrapperType: 'test',
    currency: 'test',
    artistName: 'test',
    collectionCensoredName: 'test',
    kind: 'song',
    releaseDate: 'test',
    artworkUrl60: 'test',
    trackName: 'test',
    artworkUrl100: 'test',
    artworkUrl30: 'test',
    collectionId: 'test',
    trackPrice: 'test',
    trackTimeMillis: 'test',
    trackCensoredName: 'test',
  };

  it('should filter songs with valid fields', () => {
    const extraFields = Object.assign({}, shape, { extra: 'field' });

    expect(filterSongs({ results: [extraFields] })).toEqual([shape]);
  });
});