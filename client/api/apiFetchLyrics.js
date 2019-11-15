import request from 'superagent'

const kanye = 'https://api.kanye.rest/'

export function getKanyeLyrics() {
  return request
  .get(kanye)
  .then(res => JSON.parse(res.text))
}

