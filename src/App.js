import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BookList from './components/BookList';
import AppNavbar from './components/AppNavbar';


class App extends Component {

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <BookList />
      </div>
    );
  }
}
export default App;
