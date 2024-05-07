import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id='body'>
        <div id="container">
          <h1>Quiz App</h1>
          <Link to='/quiz'>
            <button>Play</button>
          </Link>
        </div>
      </div>
    );
  }
}