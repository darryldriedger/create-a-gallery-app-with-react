import React from 'react';

import PropTypes  from 'prop-types';
import NoPics     from './NoPics';

const Gallery = props => {

  let loader ;
  let resultsHeader;
  let list = props.list;

  if (props.loading) {
    resultsHeader = <h2>Loading....</h2>;
  } else if (list.props.children.length > 0){
    resultsHeader = <h2>Results</h2>;//{props.subject}
    loader = list;
  } else if(list.props.children.length === 0){
    resultsHeader = <NoPics />;
  }

    return(
      <div className="photo-container">
        {resultsHeader}
        <ul>
          {loader}
        </ul>
      </div>
);
}
Gallery.propTypes = {
    list: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    // subject: PropTypes.string.isRequired
}
export default Gallery;
