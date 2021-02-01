import React, { Component, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const analytics = window.analytics;

function Search() {
  return (
    <div className="container">
      <InstantSearch
        searchClient={searchClient}
        indexName="instant_search"
      >
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
  )
}

function Hit({ hit }) {
  return (
    <div
      onClick={()=>window.analytics.track("Product Clicked", {brand:hit.brand,sku:hit.objectID})}
    >
      <img src={hit.image} alt="image"/>
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

export default Search;
