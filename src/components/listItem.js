import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { play } from '../utils/util';
import './listItem.less';

class ListItem extends Component {
  play(item) {
    const { dispatch } = this.props;
    play(item);
    dispatch({
      type: 'music/save',
      payload: {
        currentMusicItem: item,
      }
    });
  }
  delete(item, e) {
    // e.stopPropagation();
    const { dispatch, music: { currentMusicItem } } = this.props;
    if (item === currentMusicItem) {
      alert('不能删除当前播放歌曲！');
      return false;
    }
    let { musicList } = this.props.music;
    musicList = musicList.filter(o => o !== item);
    dispatch({
      type: 'music/save',
      payload: {
        musicList,
      }
    });
  }
  showDetail(item) {
    const path = {
      pathname: '/detail',
      state: item,
    }
    this.props.history.push(path);
  }
  render() {
    const { item, focus } = this.props;
    return (
      <li className={`components-listitem row${focus ? ' focus' : ''}`}>
        <p onClick={this.play.bind(this, item)}><strong>{item.title}</strong> - {item.artist}</p>
        <p onClick={this.showDetail.bind(this, item)}>详情</p>
        <p onClick={this.delete.bind(this, item)} className="-col-auto delete"></p>
      </li>
    );
  }
};

export default withRouter(connect(state => ({
  music: state.music,
}))(ListItem));