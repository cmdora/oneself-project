import {getList} from '../services/users.js';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload};
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const data= yield call(getList, { payload });
      yield put({ type: 'save', payload: data });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      //   if (pathname === '/users') {
      //     dispatch({ type: 'fetch', payload: query });
      //   }
      // });
    }
  },
};