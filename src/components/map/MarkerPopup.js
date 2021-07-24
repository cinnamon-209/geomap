import React, {useState} from 'react';
import {Popup} from 'react-leaflet';
import Button from "@material-ui/core/Button";

import LocationForm from './LocationForm';
import LocationList from "./LocationList";

require('dotenv').config()

const MarkerPopup = (props) => {
  const [formStatus, openFormStatus] = useState(false); 
  const { data } = props;
  //buttonState

  const closeForm = () => {
    openFormStatus(false)
  }

  return  (
  <Popup className="popup-marker" onClose = {() => { openFormStatus(false) }}>
    <div className='popup-text'>
      {data.locationName}    
      {"  "}
        <br/>
        <br/> 
        <LocationList locationData={data} id={data._id} />

        <br />
        {/*/if user from aws cognito then can see this ! /*/}
        <Button onClick={() => { openFormStatus(true)} }  variant="outlined" color="secondary"> Add more details on this location ? </Button>
        {formStatus ? 
        <LocationForm closeForm={closeForm} data={data} /> : null }
      </div>
  </Popup>
  );
};

export default MarkerPopup;
