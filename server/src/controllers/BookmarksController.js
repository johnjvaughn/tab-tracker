const {
  Bookmark,
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      let findBookmark = {UserId: userId}
      if (songId) {
        Object.assign(findBookmark, {SongId: songId})
      }
      const bookmarks = await Bookmark.findAll({
        where: findBookmark,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => Object.assign(
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
      const userId = req.user.id
      const {songId} = req.body
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
      const userId = req.user.id
      const {id} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: id,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'You do not have access to delete this bookmark.'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete bookmark.'
      })
    }
  }
}
