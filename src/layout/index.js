import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import { play, randomRange, findCurrentIndex } from '../utils/util';
import Header from './header';
import Player from '../routes/player';
import List from '../routes/list';
import Detail from '../routes/detail';

class MainLayout extends Component{
  constructor(props) {
    super(props);
    this.playNext = this.playNext.bind(this);
  }
  componentDidMount() {
    const { music: { musicList } } = this.props;
    $('#player').jPlayer({
      supplied: 'mp3',
      wmode: 'window'
    });
    //play(musicList[0]);
    $('#player').bind($.jPlayer.event.ended, (e) => {
      this.playNext();
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.music.currentMusicItem !== this.props.music.currentMusicItem) {
      play(nextProps.music.currentMusicItem);
    }
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
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/" exact render={props => <Player playNext={this.playNext} />} />
            <Route path="/player" render={props => <Player playNext={this.playNext} />} />
            <Route path="/list" render={props => <List />} />
            <Route path="/detail" render={props => <Detail />} />
          </Switch>
      </div>
    );
  }
}

export default connect(state => ({
  music: state.music,
}))(MainLayout);