import {ButtonGroup, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const IndividualNotes = (props) =>{



    return(
        <>
            <Card sx={{ minWidth: 750, mt:3}}>
                <CardContent >
                    <Typography><b>{props.note.date}</b></Typography>
                    <Typography sx={{mt:3}}>{props.note.content}</Typography>
                </CardContent>
                <CardActions>
                    <ButtonGroup variant="text" color='primary' aria-label="outlined button group" sx={{mt:3}}>
                        <Button sx={{color:'#fb8654'}}>Delete</Button>
                        <Button sx={{color:'#fb8654'}}>Alter</Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </>
        )
}

export default IndividualNotes;