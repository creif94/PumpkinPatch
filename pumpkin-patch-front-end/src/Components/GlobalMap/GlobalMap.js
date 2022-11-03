import React, {useState} from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import Pumpkin from './Icons/icons8-cute-pumpkin.svg'



const GlobalMap =(props) =>{
    const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyCUcX0wcn0Njqp7EbryawwIMcYMCfquEGE"});
    if(!isLoaded) return <div>Wait</div>;
    return <Map />


    function Map(){
        const center = {lat:30.1924352, lng:-97.7666048}
        const containerStyle = {
            width: '1280px',
            height: '700px'
        };

    return (
            <GoogleMap
                MapOp
                zoom={10}
                center={center}
                // size = {{height:'1080px', width:'1080px'}}
                mapContainerStyle = {containerStyle}
                >
                {props.listPumpkins.map((pumpkin)=>{
                    return <MarkerF key={pumpkin.id} position={{lat: pumpkin.latitude, lng: pumpkin.longitude}} icon={Pumpkin}/>
                })}
                {/*<MarkerF key="marker_1"*/}
                {/*         position={{lat: 30.1924352, lng:-97.7666048}} />*/}
            </GoogleMap>
        )
    }
}
export default GlobalMap;