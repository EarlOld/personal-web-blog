import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Grid  from 'react-bootstrap/lib/Grid';
import Header from '../Header';
import MainPage from '../MainPage'
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './bootstrap.css';

const propTypes = {
  children: PropTypes.node
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
