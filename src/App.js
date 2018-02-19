import React, { Component } from 'react';
import './App.css';
import SearchMusic from './SearchMusic';
import SearchResultContainer from './SearchResultContainer';


class App extends Component {
  state = {
    songs:''
  }

  onSearch = (searchQuery) => {
    this.setState({
      songs: searchQuery
    });
  };

  render() {
    return (
      <div className="App" >
        <SearchMusic onSearch={this.onSearch} />
        <SearchResultContainer query={this.state.songs} />

      
      </div>
          
   
      
    );
  }
}

export default App;
