// import React from 'react';
import React, { Component } from 'react';
// import PropTypes  from 'prop-types';

import axios      from 'axios';
import config     from './config';
import SearchForm from './SearchForm';
import NoPics     from './pages/NoPics';

class Container extends Component {
  constructor (){
      super();
      this.state = {
        data: [],
        piclist: [],
        loading: true,
        query: 'javascript'
      }
    }

  componentDidMount() {
    this.performSearch(this.props.subject);
    };
  //performSearch makes use of the flickr api and axios
  performSearch = (query) => {
    const req = "https://api.flickr.com/services/rest/";
    const fetcher = "method=flickr.photos.search";
    const apikey = `api_key=${config.apikey}`;
    const limit = "per_page=28";
    const format = "format=json&nojsoncallback=1";

      axios.get(`
        ${req}?
        ${fetcher}&
        ${apikey}&
        text=${query}&
        ${limit}&
        ${format}
        `)
      .then(response => {
        this.setState({
          data: response.data.photos.photo,
          loading: false,
          query: query
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    }
    // PicList function creates a list of images from the data retreived by the
    // perform search function update to State
    PicList(list) {
        const listItems = list.map( pic =>
          <li key={parseInt(pic.id,10)}>
            <img
              src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg alt=""`}
              key={parseInt(pic.id,10)}
              alt=""
            />
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }
    // updates the query state on event change
    onSearchChange = e => {
      this.setState({ query: e.target.value });
    }
    // on submit prevents default characteristic and function performSearch is run
    handleSubmit = e => {
      e.preventDefault();
      this.performSearch(this.state.query);
      e.currentTarget.reset();
    }


    render(){

      let loader ;
      let resultsHeader;
      let list = this.PicList(this.state.data);

      if (this.state.loading) {
        resultsHeader = <h2>Loading....</h2>;
      } else if (list.props.children.length > 0){
        resultsHeader = <h2>Results</h2>;
        loader = list;
      } else if(list.props.children.length === 0){
        resultsHeader = <NoPics />;
      }

     return (
         <div>
           <SearchForm
             handleSubmit={this.handleSubmit}
             onSearchChange={this.onSearchChange}
             query={this.query}
             />
           <div className="photo-container">
             {resultsHeader}
             <ul>
               {loader}
             </ul>
           </div>
         </div>
       )
     }
 }

export default Container;
