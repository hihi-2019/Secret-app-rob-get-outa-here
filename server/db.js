const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile') [environment]
const connection = require('knex')(config)


function getAllProfiles(db = connection) {
  return db('profiles').select()
}

function getProfile(id, db = connection) {
  return db('profiles')
      .where('profile_id', id).first()
}

function getRecentImages(id, db = connection) {
  return db('recent_images')
      .where('profile_id', id)
}

module.exports = {
  getAllProfiles,
  getProfile,
  getRecentImages
}