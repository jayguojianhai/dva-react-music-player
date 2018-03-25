import React, { Component } from 'react';
import { connect } from 'dva';
import MainLayout from '../components/layout';
import Player from './player';
import List from './list';
import { play } from '../utils/util';

class App extends Component {
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
  render() {
    const { history: { location : { pathname } } } = this.props;
    const component = pathname === '/list' ? <List /> : <Player />
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
