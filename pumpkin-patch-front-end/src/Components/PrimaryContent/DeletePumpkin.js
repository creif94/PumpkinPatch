import Button from "@mui/material/Button";
import axios from "axios";



const DeletePumpkin =(props) =>{
    console.log(props.id)
    const axiosDeletePumpkin = () =>{
        axios.delete(`http://localhost:3001/pumpkin/${props.id}`
        ).then(props.axiosCallForAllPumpkins)
    }


    return(
        <>
        <Button sx={{ml:3, color:'#fb8654'}} onClick={()=>axiosDeletePumpkin()}> Delete </Button>
        </>
    )
}

export default DeletePumpkin
