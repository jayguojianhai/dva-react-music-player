import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/layout';
import Player from './player';
import List from './list';
import Detail from './detail';
import { play, randomRange, findCurrentIndex } from '../utils/util';

class App extends Component {
  constructor(props) {
    super(props);
    this.playNext = this.playNext.bind(this);
  }
  componentDidMount() {
    const { currentMusicItem } = this.props.music;
    $('#player').jPlayer({
      supplied: 'mp3',
      wmode: 'window'
    });
    play(currentMusicItem);
    $('#player').bind($.jPlayer.event.ended, (e) => {
      this.playNext();
    });
  }
  componentWillUnMount() {
    $('#player').unbind($.jPlayer.event.ended);
  }
  playNext(type = 'next') {
    const { dispatch, music: { musicList, currentMusicItem, repeat } } = this.props; 
    const length = musicList.length;
    const index = findCurrentIndex(musicList, currentMusicItem);
    let newIndex = index;
    if (repeat === 'cycle') {
      if(type === 'next') {
        newIndex = (index + 1) % length;
      } else {
        newIndex = (index - 1 + length ) % length;
      }
    } else if (repeat === 'random') {
      newIndex = randomRange(0, length - 1);
      while(newIndex === index) {
        newIndex = randomRange(0, length - 1);
      }
    }
    dispatch({
      type: 'music/save',
      payload: {
        currentMusicItem: musicList[newIndex],
      }
    });
    play(musicList[newIndex]);
  }
  getComponent(path) {
    switch(path) {
      case '/list': 
        return <List />;
      case '/detail':
        return <Detail />
      default:
        return <Player playNext={this.playNext} />;
    }
  }
  render() {
    const { history: { location : { pathname } } } = this.props;
    const component = this.getComponent(pathname);
    return (
      <MainLayout>
        {component}
      </MainLayout>
    );
  }
};

export default connect(state => ({
  music: state.music,
}))(App);
