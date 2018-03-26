import React, { Component } from 'react';
import { connect } from 'dva';
import List from '../components/list';

class ListPage extends Component {
  render() {
    const { music: { currentMusicItem, musicList } } = this.props;
    return (
      <List currentMusicItem={currentMusicItem} musicList={musicList} />
    );
  }
};

export default connect(state => ({
  music: state.music,
}))(ListPage);
