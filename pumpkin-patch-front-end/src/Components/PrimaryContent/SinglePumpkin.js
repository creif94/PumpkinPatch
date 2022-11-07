import {Collapse, Table, TableCell, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";
import SinglePumpkinMap from "./SinglePumpkinMap";
import Typography from "@mui/material/Typography";
import DeletePumpkin from "./DeletePumpkin";
import Toolbar from "@mui/material/Toolbar";
import Pumpkin1 from '../GlobalMap/Icons/icons8-cute-pumpkin.svg'
import Button from "@mui/material/Button";
import axios from "axios";


const SinglePumpkin = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        props.setToggleNotes(!props.toggleNotes)
        props.setSinglePumpkin(props.pumpkin)
        // props.setAllNotes(props.pumpkin.notes)
    }
    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align ='center'> {props.pumpkin.latitude}</TableCell>
                <TableCell align ='center'> {props.pumpkin.longitude}</TableCell>
                <TableCell align ='center'> {props.pumpkin.date}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in ={open} timeout ="auto" unmountOnExit>
                       <Toolbar>
                        <Typography variant="h6" gutterBottom component="div">
                           Map
                        </Typography>
                        <DeletePumpkin id = {props.pumpkin.id}
                                       axiosCallForAllPumpkins = {props.axiosCallForAllPumpkins}/>
                       <Button sx={{ml:2 , color:'#fb8654'}} onClick={()=>handleOpen()}>Notes:</Button>
                       </Toolbar>
                        <SinglePumpkinMap latPosition = {props.pumpkin.latitude}
                                          longPosition = {props.pumpkin.longitude}
                                          />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default SinglePumpkin;

