const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          limit: 10,
          where: {
            $or: [
              'title', 'artist', 'album', 'genre'
            ].map(key => ({
              [key]: {
                $like: '%' + search + '%'
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.id)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch song.'
      })
    }
  },
  async create (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to create song.'
      })
    }
  },
  async update (req, res) {
    try {
      console.log(req.body)
      const song = await Song.update(req.body, {
        where: { id: req.params.id }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to update song.'
      })
    }
  }
}
