import {ButtonGroup, Card, CardActions, CardContent, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const NewNote = (props) => {



    return (
        <>
            <Card sx={{ minWidth: 750 }}>
                <CardContent>
                    <Box align={'center'}>
                       <form onSubmit={(e)=>{props.axiosCallPost(e)}}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Multiline"
                                multiline
                                maxRows={4}
                                value={props.content}
                                onChange={(e)=>{props.setContent(e.target.value)}}
                                variant="standard"
                            />
                           <ButtonGroup variant="text" color='primary' aria-label="outlined button group" sx={{mt:3}}>
                               <Button sx={{color:'black'}} type="submit">Submit</Button>
                               <Button sx={{color:'black'}} onClick={()=>{props.setContent()}}>Clear</Button>
                           </ButtonGroup>
                       </form>
                    </Box>
                </CardContent>
                {/*<CardActions>*/}
                {/*    <ButtonGroup variant="text" color='primary' aria-label="outlined button group" sx={{mt:3}}>*/}
                {/*        <Button sx={{color:'black'}} type="submit">Submit</Button>*/}
                {/*        <Button sx={{color:'black'}}>Clear</Button>*/}
                {/*    </ButtonGroup>*/}
                {/*</CardActions>*/}
            </Card>
        </>

    )
}

export default NewNote;