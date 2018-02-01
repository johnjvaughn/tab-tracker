const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.get('/songs/:id', SongsController.show)
  app.post('/songs', SongsController.create)
  app.put('/songs/:id', SongsController.update)

  app.get('/bookmarks', isAuthenticated, BookmarksController.index)
  app.post('/bookmarks', isAuthenticated, BookmarksController.create)
  app.delete('/bookmarks/:id', isAuthenticated, BookmarksController.destroy)

  app.get('/histories', isAuthenticated, HistoriesController.index)
  app.post('/histories', isAuthenticated, HistoriesController.create)
}
