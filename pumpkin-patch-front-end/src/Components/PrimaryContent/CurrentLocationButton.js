// import Button from "@mui/material/Button";
// import {useEffect, useState} from "react";
// import axios from "axios";
//
//
// const SinglePumpkinLocation = ({axiosCallForAllPumpkins , latPosition , setLatPosition , longPosition,setLongPosition }) => {
//
//     const successCallback = (position) => {
//         console.log(position.coords.latitude)
//         console.log(position.coords.longitude)
//         console.log(position);
//         setLatPosition(position.coords.latitude)
//         setLongPosition(position.coords.longitude)
//     };
//     const errorCallback = (error) => {
//         console.log(error);
//     };
//     const addPumpkinToDB =()=>{
//         axios.post(`http://localhost:3001/pumpkin`,{
//             latitude: latPosition,
//             longitude: longPosition
//         }).then(axiosCallForAllPumpkins)
//     }
//     useEffect(() => {
//         if(longPosition != undefined){
//             addPumpkinToDB()
//         }
//     },[longPosition])
//
//     const getLocation = ()=>{
//         navigator.geolocation.getCurrentPosition(successCallback,errorCallback, {
//             enableHighAccuracy: true,
//             timeout: 5000,
//             maximumAge: 10000,
//             maximumAgeActive: 10000,
//             timeoutActive: 10000,})
//     }
//     return (<>
//         <Button variant={"outlined"} onClick={()=>{getLocation()}}>
//             Add Pumpkin
//         </Button>
//
//     </>)
//
//
// }
// export default SinglePumpkinLocation;