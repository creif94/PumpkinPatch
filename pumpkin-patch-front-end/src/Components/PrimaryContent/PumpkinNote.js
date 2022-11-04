import Box from "@mui/material/Box";
import {ButtonGroup, Card, CardActions, CardContent, Fab} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import IndividualNotes from "./IndividualNotes";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from '@mui/icons-material/Add';
import NewNote from './NewNote'

const PumpkinNote = (props) =>{

    const [content, setContent] = useState()
    const [toggleAdd, setToggleAdd] = useState(false)

    const AddNote = () =>{
        if (!toggleAdd){
            return (
                <>
                    <Container sx={{mt:3}}>
                        {grabNotes}
                    </Container>
                </>
            )
        }else{
            return (
                <>
                    <Container sx={{mt:3}}>
                        <NewNote content = {content} setContent={setContent} toggleAdd = {toggleAdd}
                                 setToggleAdd={setToggleAdd} axiosCallPost ={axiosCallPost}
                                setToggleNotes = {props.setToggleNotes}/>
                    </Container>
                    <Container sx={{mt:3}}>
                        {grabNotes}
                    </Container>
                </>
            )
        }

    }

    // const grabNotes = props.singlePumpkin.notes.map((note)=>{
    //     return <IndividualNotes key={note.id} note={note} />
    // })
    const grabNotes = props.allNotes.map((note)=>{
        return <IndividualNotes key={note.id} note={note} />
    })
    const axiosCallPost = ()=>{
        axios.post(`http://localhost:3001/pumpkin/${props.singlePumpkin.id}/notes` , {
            content : content
        }).then(() => props.axiosCallForAllNotes).then(()=>props.setToggleNotes(true))
    }
    return (<>
        <Box align ='center' sx={{mt:5}}>
            <Toolbar>
                <Typography variant={"h6"} sx={{ml:35}}>Notes/Comments</Typography>
                <Button sx={{ml:5, color:'#fb8654'}} onClick={()=>{setToggleAdd(!toggleAdd)}}><AddIcon/></Button>
            </Toolbar>
            {AddNote()}
            {/*<Container sx={{mt:3}}>*/}
            {/*    {grabNotes}*/}
            {/*</Container>*/}



        </Box>

        </>)

}


export default PumpkinNote
