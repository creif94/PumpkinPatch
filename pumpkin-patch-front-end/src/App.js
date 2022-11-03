import './App.css';
import ListOfAllPumpkins from './Components/PrimaryContent/ListOfAllPumpkins'
import {useEffect, useState} from "react";
import TopNavigation from './Components/TopNavigationBar/BarNavigation'
import axios from "axios";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CurrentLocationButton from "./Components/PrimaryContent/CurrentLocationButton";
import SinglePumpkinMap from "./Components/PrimaryContent/SinglePumpkinMap";
import GlobalMap from "./Components/GlobalMap/GlobalMap";
import Typography from "@mui/material/Typography";
import PumpkinNote from "./Components/PrimaryContent/PumpkinNote"



function App() {
    const [globalView, setGlobalView] = useState(false)
    const [listPumpkins, setListOfAllPumpkins] = useState([])
    const [toggleNotes, setToggleNotes] = useState(false)

    const [latPosition, setLatPosition] = useState();
    const [longPosition, setLongPosition] = useState()

    const axiosCallForAllPumpkins = ()=>{
        axios.get(`http://localhost:3001/pumpkin`)
            .then((response)=>{setListOfAllPumpkins(response.data)})
            .then(()=>{console.log("Pumpkin pull was successfull")})
    }
    useEffect( () =>{
        axiosCallForAllPumpkins()
    },[])

    const [selectedTheme, setSelectedTheme] = useState(false)
    const lightTheme = createTheme({
        palette: {
            mode: 'light'
        }
    })
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary:{
                            main: '#000000',
                        },
        },
    });

    const toggleNotesPanel = () =>{
        if (!toggleNotes){
            return (<></>)
        } else { return(<><Box align ='center'><PumpkinNote /></Box></>)}
    }


    const switchView = () =>{
        if(globalView === true){
            return (<>
                <Box align = 'center' sx={{mt:5}}><Typography variant="h4">Global Map</Typography></Box>
                        <Box align = 'center' sx={{mt:2}}><GlobalMap listPumpkins = {listPumpkins}/> </Box>
            </>)
        } else {
            return(
                <>
                    <Container >
                        <Grid2 container spacing = {12}>
                            <Grid2 xs={2}>
                                <Box display = 'flex'
                                     alignItems = 'center'
                                     justifyContent = 'center'>
                                </Box>
                            </Grid2>
                            <Grid2 xs={8}>
                                <Box
                                    display = "flex"
                                    alignItems = "left"
                                    justifyContent = "center"
                                    sx={{mt:5}}>
                                    <ListOfAllPumpkins listPumpkins = {listPumpkins} longPosition = {longPosition}
                                                       latPosition = {latPosition} axiosCallForAllPumpkins = {axiosCallForAllPumpkins}
                                                       setToggleNotes = {setToggleNotes}
                                    />
                                </Box>
                            </Grid2>
                            <Grid2 xs={2}>
                                {toggleNotesPanel()}
                            </Grid2>
                        </Grid2>
                    </Container>
                </>
            )
        }
    }

    return (
        <>
            <ThemeProvider theme = {(selectedTheme === true) ? darkTheme : lightTheme}>
                <CssBaseline />
                <TopNavigation setSelectedTheme = {setSelectedTheme} selectedTheme ={selectedTheme}
                               axiosCallForAllPumpkins ={axiosCallForAllPumpkins}
                               latPosition = {latPosition}
                               setLatPosition = {setLatPosition}
                               longPosition = {longPosition}
                               setLongPosition = {setLongPosition}
                               setGlobalView = {setGlobalView}/>
                {switchView()}
            </ThemeProvider>
        </>
    )
}

export default App;
