import request from 'superagent'

const city = 'https://names.drycodes.com/10?nameOptions=cities'
const country = 'https://names.drycodes.com/10?nameOptions=countries'


export function getCity() {
  return request
  .get(city).then(res => res.text)
}


export function getCountry() {
  return request
  .get(country).then(res => res.text)
}
