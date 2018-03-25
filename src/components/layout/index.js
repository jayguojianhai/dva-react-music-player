import React, { Component } from 'react';
import { connect } from 'dva';
import Header from './header';

class MainLayout extends Component{
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default connect(state => ({
  music: state.music,
}))(MainLayout);