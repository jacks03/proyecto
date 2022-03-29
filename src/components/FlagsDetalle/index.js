import { useState } from "react";
import { Button,Dialog,DialogContent } from "@mui/material";

const FlagsDetalle = () => {

    const info = () => {
        
    }
    
    const [open,setOpen ] = useState(false)

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <div>
            <Button onClick={openDialog} variant="container" color="primary" > 
            detalle del pais
            </Button>
            <Dialog open={open}>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FlagsDetalle