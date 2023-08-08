import { Typography } from "@mui/material"
import React from "react"


export const ItemListContainer = (props) => {
    return (
            <Typography 
                variant="h1" 
                sx={{
                    textAlign:"center"
                }}
            >
                {props.nombre}
            </Typography>
    )
}