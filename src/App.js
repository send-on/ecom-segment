import React, { Component, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import qs from 'qs';
import Description from './Description'
import Search from './Search'

function App({ location, history }) {
  const [page, setPage] = useState('Search');
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">Ecom Store</a>
        </h1>
      </header>
      {page === "Search"
      ? <Search />
      : ""}
    </div>
  );
}

export default App;
