const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAllProfiles()
  .then(profiles => {
    res.json(profiles)
  })
  .catch(err => {
    res.status(500).send('SHIT!: ' + err.message)
  })
})

router.get('/profile/:id', (req, res) => {
  db.getProfile(req.params.id)
  .then(profile => {
    res.json(profile)
  })
  .catch(err => {
    res.status(500).send('SHIT!: ' + err.message)
  })
})

router.get('/recent-images/:profileId', (req, res) => {
  db.getRecentImages(req.params.profileId)
  .then(images => {
    res.json(images)
  })
  .catch(err => {
    res.status(500).send('SHIT!: ' + err.message)
  })
})

module.exports = router