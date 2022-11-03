import SinglePumpkin from './SinglePumpkin'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import AppBar from "@mui/material/AppBar";

const ListOfAllPumpkins =(props)=>{

    const PumpkinMapping = props.listPumpkins.map((pumpkin)=>{
       return (
           <SinglePumpkin key={pumpkin.id} pumpkin={pumpkin} longPosition = {props.longPosition}
                          latPosition = {props.latPosition} axiosCallForAllPumpkins ={props.axiosCallForAllPumpkins}
                            setToggleNotes = {props.setToggleNotes}/>
       )
    })
    return(
        <>
            <TableContainer sx={{mr:9}}>
                <Table sx={{minWidth:'75%'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell align ='center'>Pumpkin Latitude</TableCell>
                            <TableCell align ='center'>Pumpkin Longitude</TableCell>
                            <TableCell align ='center'>DatePlanted</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {PumpkinMapping}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListOfAllPumpkins;
