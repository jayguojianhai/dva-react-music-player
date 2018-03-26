import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

class Detail extends Component{
  render() {
    const currentMusicItem = this.props.location.state ? this.props.location.state : this.props.music.currentMusicItem;
    return (
      <div>
        <h2>{`${currentMusicItem.title}-${currentMusicItem.artist}`}</h2>
      </div>
    );
  }
}

export default withRouter(connect(state =>({
  music: state.music
}))(Detail));