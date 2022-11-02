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


const title = 'The Pumpkin Chase'
const pages = ['Add', 'Map'];


function BarNavigation(props) {


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <Container maxWidth ={'md'}>
                    <Grid2 container spacing={12}>
                        <Grid2 xs={4}>
                            <Box align ='center'>Add</Box>
                        </Grid2>
                        <Grid2 xs={4}>
                            <Box align ='center'>The Pumpkin Chase</Box>
                        </Grid2>
                        <Grid2 xs={4}>
                            <Box align ='center'>Global Map</Box>
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
// Toolbar disableGutters>
// <Grid2 container spacing={12}>
//     <Grid2 xs={3}>Testing</Grid2>
// <Grid2 xs={4}>Testing</Grid2>
// <Grid2 xs={3}>Testing</Grid2>
// </Grid2>
// </Toolbar>