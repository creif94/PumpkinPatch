import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid2 from '@mui/material/Unstable_Grid2';
import {Switch} from "@mui/material";
import axios from "axios";
import {useEffect} from "react";


const title = 'The Pumpkin Chase'
const pages = ['Add', 'Map'];


function BarNavigation(props) {
    const successCallback = (position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        console.log(position);
        props.setLatPosition(position.coords.latitude)
        props.setLongPosition(position.coords.longitude)
    };
    const errorCallback = (error) => {
        console.log(error);
    };
    const addPumpkinToDB =()=>{
        axios.post(`http://localhost:3001/pumpkin`,{
            latitude: props.latPosition,
            longitude: props.longPosition
        }).then(props.axiosCallForAllPumpkins)
    }
    useEffect(() => {
        if(props.longPosition != undefined){
            addPumpkinToDB()
        }
    },[props.longPosition])

    const getLocation = ()=>{
        navigator.geolocation.getCurrentPosition(successCallback,errorCallback, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000,
            maximumAgeActive: 10000,
            timeoutActive: 10000,})
    }
    return (
        <>
            <AppBar position="static" style={{background:'#fb8654' }}>
                <Toolbar>
                <Container maxWidth ={'md'}>
                    <Grid2 container spacing={12}>
                        <Grid2 xs={4}>
                            <Box align ='center'><Button sx={{color:'white'}} variant={"text"} onClick={()=>{getLocation()}}>Add Pumpkin</Button></Box>
                        </Grid2>
                        <Grid2 xs={4}>
                            <Box align ='center'><Button sx={{color:'white'}} variant={"text"} onClick = {()=> props.setGlobalView(false)}>The Pumpkin Chase</Button></Box>
                        </Grid2>
                        <Grid2 xs={4}>
                            <Box align ='center'><Button sx={{color:'white'}} variant={"text"} onClick = {()=> props.setGlobalView(true)}>Global Map</Button></Box>
                        </Grid2>
                    </Grid2>
                </Container>
                    <Switch
                        checked={props.selectedTheme}
                        // onChange={(e) => handleSubmit(e)}

                        onChange={()=>{props.setSelectedTheme(!props.selectedTheme)}}
                    />
                </Toolbar>
            </AppBar>
        </>
    )

}
export default BarNavigation;