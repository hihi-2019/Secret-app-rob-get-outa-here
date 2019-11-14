import request from 'superagent'

const unsplash = 'https://source.unsplash.com/800x450/?'

export function getProfileImage() {
  return request
  .get(unsplash + 'profile')
  .then(res => res.text)
}

