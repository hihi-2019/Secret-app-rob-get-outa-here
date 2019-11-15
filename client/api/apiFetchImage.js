import request from 'superagent'

const unsplash = 'https://source.unsplash.com/450x450/?'

export function getProfileImage() {
  return request
  .get(unsplash + 'elderly')
  .then(res => res)
}

export function getRecentPhotos () {
  return request.get(unsplash).then(res => res)
}