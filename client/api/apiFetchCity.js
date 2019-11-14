import request from 'superagent'

const city = 'https://'

export function getCity() {
  return request
  .get(city).then(res => res.text)
}
