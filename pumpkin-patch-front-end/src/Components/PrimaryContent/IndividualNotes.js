import {ButtonGroup, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";

const IndividualNotes = (props) =>{

    const axiosDelete = () =>{
        console.log(props.pumpkinId)
        console.log(props.note.id)
        axios.delete(`http://localhost:3001/pumpkin/${props.pumpkinId}/notes/${props.note.id}`)
            .then(props.axiosCallForAllNotes)
    }
    return(
        <>
            <Card sx={{  width:2/2, mt:3}}>
                <CardContent >
                    <Typography><b>{props.note.date}</b></Typography>
                    <Typography sx={{mt:3}}>{props.note.content}</Typography>
                </CardContent>
                <CardActions>
                    <ButtonGroup variant="text" color='primary' aria-label="outlined button group" sx={{mt:3}}>
                        <Button sx={{color:'#fb8654'}} onClick={()=>{axiosDelete()}}>Delete</Button>
                        <Button sx={{color:'#fb8654'}}>Alter</Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </>
        )
}

export default IndividualNotes;