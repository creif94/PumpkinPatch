import React, {useState} from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import './SinglePumpkinMap.css'



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
            <Marker key="marker_1" position={{lat: props.latPosition, lng:props.longPosition}} />
        </GoogleMap>
        )
    }
}
export default SinglePumpkinMap;