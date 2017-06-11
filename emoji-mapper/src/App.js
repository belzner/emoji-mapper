import React, { Component } from 'react';
import EmojiList from './components/EmojiList';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>The Great Emoji Survey</h1>
        </div>
        <EmojiList />
      </div>
    );
  }
}

export default App;
