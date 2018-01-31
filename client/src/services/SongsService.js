import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: { search: search }
    })
  },
  show (id) {
    return Api().get('songs/' + String(id))
  },
  create (song) {
    return Api().post('songs', song)
  },
  update (song) {
    return Api().put('songs/' + String(song.id), song)
  }
}
