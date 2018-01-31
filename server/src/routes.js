const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.get('/songs/:id', SongsController.show)
  app.post('/songs', SongsController.create)
  app.put('/songs/:id', SongsController.update)
  
  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.create)
  app.delete('/bookmarks/:id', BookmarksController.destroy)
}
