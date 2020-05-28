import React from 'react';
import config from '../../config/api';


const { 
  imagesBasePath, imagesSizeUri
} = config;

const SmartImage = ({ imagePath }) => (
  imagePath 
    ? <img src={`${imagesBasePath}${imagesSizeUri}${imagePath}`} />
    : <img src="/assets/placeholder.png"/>
);


export default SmartImage;
