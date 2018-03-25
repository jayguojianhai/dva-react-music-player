import React, { Component } from 'react';
import ListItem from './listItem';

class List extends Component {
  render() {
    const { musicList, currentMusicItem } = this.props;
    const listEle = musicList.map(item => <ListItem
      focus={item === currentMusicItem}
      item={item}
      key={item.id}
    />);
    return (
      <ul>
        {listEle}
      </ul>
    );
  }
};

export default List;
