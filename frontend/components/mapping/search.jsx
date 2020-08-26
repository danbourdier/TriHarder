import React, { Component } from 'react';

import RouteMap from "./route_map_main";

// uses search_container
  // passes down #createRoute and takes in an object as an argument
const Search = props => (

  <div>
    <RouteMap {...props}/>
  </div>
)



export default Search;