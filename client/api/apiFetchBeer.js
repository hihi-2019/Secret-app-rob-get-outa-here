import request from 'superagent'

const beer = 'https://api.beer.rest/'

export function getBeer() {
  return request.get(beer)
  .then(res => res.data)
}
