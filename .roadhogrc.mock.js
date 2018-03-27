import { format, delay } from 'roadhog-api-doc';
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  // 'GET /api/fetchMusicList': {
  //   success: true,
  //   resultMsg: '处理成功',
  //   resultCode: 'SUCCESS',
  //   data: []
  // },
  'GET /api/fetchMusicList': {
    success: true,
    resultMsg: '处理成功',
    resultCode: 'SUCCESS',
    data: [
      {
        id: 1,
        title: '天使中的魔鬼',
        artist: '田馥甄',
        file: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3',
        cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.jpg',
      }, {
        id: 2,
        title: '我要你',
        artist: '任素汐',
        file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3',
        cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg'
      }, {
        id: 3,
        title: '成都',
        artist: '赵雷',
        file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3',
        cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.jpg'
      }, {
        id: 4,
        title: 'sound of silence',
        artist: 'Simon & Garfunkel',
        file: 'http://oj4t8z2d5.bkt.clouddn.com/sound-of-silence.mp3',
        cover: 'http://oj4t8z2d5.bkt.clouddn.com/sound-of-silence.jpg'
      }
    ]
  },
};

export default (noProxy ? {} : delay(proxy, 1000));