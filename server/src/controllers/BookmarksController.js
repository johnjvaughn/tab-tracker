const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId : songId,
          UserId : userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch bookmark.'
      })
    }
  },
  async create (req, res) {
    try {
      const bookmark = req.query
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to add bookmark.'
      })
    }
  },
  async destroy (req, res) {
    try {
      const {id} = req.params
      const bookmark = await Bookmark.findById(id)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete bookmark.'
      })
    }
  }

}
