import React, { Component } from 'react';
import emojiData from '../emojiData.js';
import '../assets/css/EmojiList.css';

class EmojiList extends Component {
  render() {
    let emojiTable = emojiData.map(emoji => {
      let emojiList = emoji.images.map(image => {
        return (
          <td><img src={ image.src } alt={ image.name } /></td>
        );
      });
      return (
        <tr>{ emojiList }</tr>
      );
    });
    return (
      <table className="EmojiList-table">{ emojiTable }</table>
    );
  }
}

export default EmojiList;
