import React, { Component, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const analytics = window.analytics

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">ecom-segment</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="instant_search">
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits
                  hitComponent={Hit}
                  analytics={analytics}
                />
                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit({ hit }) {
  return (
    <div
      onClick={()=>window.analytics.track("Product Clicked", {brand:hit.brand,sku:hit.objectID})}
    >
      <div>
        brand: {hit.brand}
      </div>
      <div>
        categories: {JSON.stringify(hit.categories)}
      </div>
      <div>
        name: {hit.name}
      </div>

    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
