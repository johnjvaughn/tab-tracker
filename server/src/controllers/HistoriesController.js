const {
  History,
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
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
        .map(history => Object.assign(
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
      const userId = req.user.id
      const {songId} = req.body
      const newHistory = {
        SongId: songId,
        UserId: userId
      }
      await History.destroy({ where: newHistory })
      const returnHistory = await History.create(newHistory)
      res.send(returnHistory)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to add history.'
      })
    }
  }
}
