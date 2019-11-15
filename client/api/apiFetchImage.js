import request from 'superagent'

const unsplash = 'https://source.unsplash.com/450x450/?'

const recentPhotos = 'https://source.unsplash.com/800x450/?goat'


export function getProfileImage() {
  return request
  .get(unsplash + 'elderly')
  .then(res => res)
}

export function getRecentPhotos () {
  return request
  .get(recentPhotos)
  .then(res => res)
}