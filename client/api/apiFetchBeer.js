const request = require('superagent')

export function getBeer() {
  return request
    .get('/api/beer')
    .then(res => res)
}
