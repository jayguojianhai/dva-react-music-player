import { query } from '../services/music';

export default {

  namespace: 'music',

  state: {
    musicList: [],
    currentMusicItem: {},
    repeat: 'cycle',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'fetch'
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(query);
      yield put({ 
        type: 'save',
        payload: {
          musicList: response.data,
          currentMusicItem: response.data[0],
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
