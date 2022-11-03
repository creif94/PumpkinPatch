import React, {useState} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import './SinglePumpkinMap.css'
import Pumpkin from './Icons/icons8-cute-pumpkin.svg'



const SinglePumpkinMap =(props) =>{
    const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyCUcX0wcn0Njqp7EbryawwIMcYMCfquEGE"});
    if(!isLoaded) return <div>Wait</div>;
    return <Map />

    function Map(){
        const center = {lat:props.latPosition, lng:props.longPosition}
        return (
        <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName = "map-container">
            <MarkerF key="marker_1"
                     icon = {Pumpkin}
                    position={{lat: props.latPosition, lng:props.longPosition}} />
        </GoogleMap>
        )
    }
}
export default SinglePumpkinMap;