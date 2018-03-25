import React, { Component } from 'react';
import { Link } from 'dva/router';
import './header.less';

class Header extends Component {
  render() {
    return (
      <div className="components-header row">
        <Link to="/" className="-col-auto"><img src="../../src/assets/images/logo.png" width="40" alt="" /></Link>
        <h1 className="caption">React Music Player</h1>
      </div>
    );
  }
};

export default Header;
