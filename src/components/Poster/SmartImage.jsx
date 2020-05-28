import React from 'react';


const imgBasePath ="https://image.tmdb.org/t/p/w185";

const SmartImage = ({ imagePath }) => {
  return <img src={`${imgBasePath}${imagePath}`}/>;
}


export default SmartImage;
