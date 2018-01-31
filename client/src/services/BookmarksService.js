import Api from '@/services/Api'

export default {
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  create (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },
  delete (id) {
    return Api().delete('bookmarks/' + String(id))
  }
}
