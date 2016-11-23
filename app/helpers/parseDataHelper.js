/**
 * API data parser
 */

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

export function toMinutes(miliseconds) {
  const minutes = Math.floor(miliseconds / 60000);
  const seconds = ((miliseconds % 60000) / 1000).toFixed(0);
  const preSecond = (seconds < 10 ? '0' : '');

  return `${minutes}:${preSecond}${seconds}`;
}

export function toDate(date, locale) {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return newDate.toLocaleString(locale, options);
}

export function toPrice(price, currency, locale) {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
}

export function toPoster(item, key) {
  const hint = key.split('artworkUrl').pop();
  const pattern = `${hint}x${hint}bb`;
  const posterPattern = `${hint * 10}x${hint * 10}bb`;

  return item.replace(pattern, posterPattern);
}

export function formatValue(key, value, locale) {
  const current = value[key];

  switch (key) {
    case 'trackTimeMillis':
      return toMinutes(current);
    case 'releaseDate':
      return toDate(current, locale);
    case 'artworkUrl30':
    case 'artworkUrl60':
    case 'artworkUrl100':
      return toPoster(current, key);
    case 'trackPrice':
      return toPrice(current, value.currency, locale);
    default:
      return current;
  }
}

export function filterSongs(songs, locale) {
  const filteredSongs = [];

  songs.results.forEach((song) => {
    const filteredSong = {};

    Object.keys(song).forEach((key) => {
      if (fields.includes(key)) {
        const value = formatValue(key, song, locale);
        filteredSong[key] = value;
      }
    });

    filteredSongs.push(filteredSong);
  });

  return filteredSongs;
}

