import React, { Component } from 'react';
import { connect } from 'dva';
import List from '../components/list';

class App extends Component {
  render() {
    const { currentMusicItem, musicList } = this.props.music;
    return (
      <List currentMusicItem={currentMusicItem} musicList={musicList} />
    );
  }
};

export default connect(state => ({
  music: state.music,
}))(App);
