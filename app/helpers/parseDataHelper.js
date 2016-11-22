/**
 * API data parser
 */

export const kind = 'song';
export const fields = [
  'artistId',
  'trackId',
  'previewUrl',
  'collectionName',
  'collectionPrice',
  'primaryGenreName',
  'wrapperType',
  'currency',
  'artistName',
  'collectionCensoredName',
  'kind',
  'releaseDate',
  'artworkUrl60',
  'trackName',
  'artworkUrl100',
  'artworkUrl30',
  'collectionId',
  'trackPrice',
  'trackTimeMillis',
  'trackCensoredName',
];

export function filterSongs(songs) {
  const filteredSongs = [];

  songs.results.forEach((song) => {
    if (song.kind === kind) {
      const filteredSong = {};

      Object.keys(song).forEach((key) => {
        if (fields.includes(key)) filteredSong[key] = song[key];
      });

      filteredSongs.push(filteredSong);
    }
  });

  return filteredSongs;
}
