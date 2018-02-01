import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('histories', {
      params: params
    })
  },
  create (history) {
    return Api().post('histories', history)
  }
}
