import React, { Component } from 'react';
import './progress.less';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.changeProgress = this.changeProgress.bind(this);
  }
  static defaultProps = {
    barColor: '#2f9842',
  }
  changeProgress(e) {
    const progressBar = this.progressBar;
    const { onProgressChange } = this.props;
    const progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
    onProgressChange && onProgressChange(progress);
  }
  render() {
    const { progress, barColor } = this.props;
    return (
      <div className="components-progress" ref="progressBar" ref={progressBar => {this.progressBar = progressBar}} onClick={this.changeProgress}>
        <div className="progress" style={{ width: `${progress}%`, background: barColor}}></div>
      </div>
    );
  }
};

export default Progress;
