const {
  Bookmark,
  Song,
  User
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      let findBookmark = {UserId: userId}
      if (songId) {
        findBookmark = _.extend({SongId: songId})
      }
      const bookmarks = await Bookmark.findAll({
        where: findBookmark,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch bookmark.'
      })
    }
  },
  async create (req, res) {
    try {
      const {songId, userId} = req.body
      const newBookmark = {
        SongId: songId,
        UserId: userId
      }
      const bookmark = await Bookmark.findOne({
        where: newBookmark
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have this set as a bookmark.'
        })
      }
      const returnBookmark = await Bookmark.create(newBookmark)
      res.send(returnBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to add bookmark.'
      })
    }
  },
  async destroy (req, res) {
    try {
      const {id} = req.params
      const bookmark = await Bookmark.findOne({where: {id: id}})
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete bookmark.'
      })
    }
  }
}
