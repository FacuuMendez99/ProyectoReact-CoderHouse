import { useState } from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Box, IconButton } from '@mui/material';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

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
