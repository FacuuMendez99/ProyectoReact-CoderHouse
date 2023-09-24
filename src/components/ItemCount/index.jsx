
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Box, Button, IconButton } from '@mui/material';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ItemCount( {cantidad, handleRestar, handleSumar, handleAgregar}) {


    return (
        <Box>
            <IconButton onClick={handleRestar}><RemoveCircleOutlinedIcon/></IconButton>
            <span>{cantidad}</span>
            <IconButton onClick={handleSumar}><AddCircleOutlinedIcon/></IconButton>
            <Button onClick={handleAgregar}>Agregar al Carrito<ShoppingCartOutlinedIcon/></Button>
        </Box>
    )
}
