import { useState } from 'react'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Box, IconButton } from '@material-ui/core';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';

export default function ItemCount() {
    const [cantidad, setCantidad] = useState(0)

    const agregar = () => {
        setCantidad(cantidad + 1)
    }

    const quitar = () => {
        (cantidad > 1) && setCantidad(cantidad - 1)
    }

    return (
        <Box>
            <IconButton onClick={quitar}><RemoveCircleOutlinedIcon/></IconButton>
            <span>{cantidad}</span>
            <IconButton onClick={agregar}><AddCircleOutlinedIcon/></IconButton>
        </Box>
    )
}
