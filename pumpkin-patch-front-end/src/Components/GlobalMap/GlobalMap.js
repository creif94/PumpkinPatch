import React, {useState} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"




const GlobalMap =() =>{
    const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyCUcX0wcn0Njqp7EbryawwIMcYMCfquEGE"});
    if(!isLoaded) return <div>Wait</div>;
    return <Map />

    function Map(){
        const center = {lat:30.1924352, lng:-97.7666048}
        return (
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName = "map-container"
                >
                {/*<MarkerF key="marker_1"*/}
                {/*         position={{lat: 30.1924352, lng:-97.7666048}} />*/}
            </GoogleMap>
        )
    }
}
export default GlobalMap;