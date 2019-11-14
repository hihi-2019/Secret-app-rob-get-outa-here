import request from 'superagent'

const unsplash = 'https://source.unsplash.com/800x450/?'

export function getProfileImage() {
  return request
  .get(unsplash + 'elderly')
  .then(console.log('success')
}

export function getRecentPhotos () {
  return request.get(unsplash)
  .then(console.log('success')
}