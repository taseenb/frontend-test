export const deserialize = qs => Object.fromEntries(new URLSearchParams(qs))

export const serialize = obj =>
  Object.entries(obj)
    .filter(i => i[1] !== '' && i[1] !== null)
    .map(i => [i[0], encodeURIComponent(i[1])].join('='))
    .join('&')
