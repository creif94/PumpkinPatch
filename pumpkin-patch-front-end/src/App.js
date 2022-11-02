import './App.css';
import ListOfAllPumpkins from './Components/PrimaryContent/ListOfAllPumpkins'
import {useEffect, useState} from "react";
import TopNavigation from './Components/TopNavigationBar/BarNavigation'
import axios from "axios";
import {createTheme, TableContainer, ThemeProvider} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

function App() {
    const [listPumpkins, setListOfAllPumpkins] = useState([])
    const [singlePumpkin, setSinglePumpkin] = useState()

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
                main: '#414141',
            },
            secondary:{
                main: '#414141',
            }



        }
    })
    return (
        <>
            <ThemeProvider theme = {(selectedTheme === false) ? darkTheme : lightTheme}>
                <TopNavigation setSelectedTheme = {setSelectedTheme} selectedTheme ={selectedTheme}/>
                    <Container >
                        <Grid2 container spacing = {12}>
                            <Grid2 xs={2}>

                            </Grid2>
                            <Grid2 xs={8}>
                                <Box
                                    display = "flex"
                                    alignItems = "left"
                                    justifyContent = "center">
                                    <ListOfAllPumpkins listPumpkins = {listPumpkins}/>
                                </Box>

                            </Grid2>
                            <Grid2 xs={2}>

                            </Grid2>
                        </Grid2>
                    </Container>
            </ThemeProvider>
        </>
    )


}

export default App;
