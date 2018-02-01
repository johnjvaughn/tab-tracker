const {
  History,
  Song,
  User
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      let findHistory = {UserId: userId}
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch history.'
      })
    }
  },
  async create (req, res) {
    try {
      const {songId, userId} = req.body
      const newHistory = {
        SongId: songId,
        UserId: userId
      }
      const returnHistory = await History.create(newHistory)
      res.send(returnHistory)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to add history.'
      })
    }
  }
}
