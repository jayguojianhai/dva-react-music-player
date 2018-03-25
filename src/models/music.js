
import { MUSIC_LIST } from '../config/config';

export default {

  namespace: 'music',

  state: {
    musicList: MUSIC_LIST,
    currentMusicItem: MUSIC_LIST[0],
    repeat: 'cycle',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
