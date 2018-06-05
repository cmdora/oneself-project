// 触发的事件
import * as types from './mutation-types'

export default {
  // 订阅公众号
  subscribeMp ({commit}, mp) {
    commit(types.SUBSCRIBE_MP, mp)
  },
  // 取消公众号
  unsubscribeMp ({commit}, weixinhao) {
    commit(types.UNSUBSCRIBE_MP, weixinhao)
  },
  addSearchResultList ({commit}, mp) {
    commit(types.ADD_SEARCHRESULT_LIST, mp)
  },
  unsubSearchResult ({commit}, weixinhao) {
    commit(types.UNSUBSCRIBE_SEARCHRESULT, weixinhao)
  },
  clearSearchResult ({commit}, info) {
    commit(types.CLEAR_SEARCHRESULT, info)
  }
}
