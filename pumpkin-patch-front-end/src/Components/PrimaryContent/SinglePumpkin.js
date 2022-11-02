import {Collapse, TableCell, TableRow} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";


const SinglePumpkin = (props) => {

    const [open, setOpen] = useState(false)

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
                <Collapse in ={open} timeout ="auto" unmountOnExit>
                    <TableCell>????</TableCell>
                </Collapse>
            </TableRow>
        </>
    )
}

export default SinglePumpkin;
