import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { data } = props;

  
  return  (<Popup>
    <div className='poup-text'>{data.locationName +  "\n" + data.description}</div>
  </Popup>);

};

export default MarkerPopup;
