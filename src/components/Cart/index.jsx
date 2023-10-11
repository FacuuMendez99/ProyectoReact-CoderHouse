import { Box, Button, Container, Divider, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react'
import { CartContext } from '../../context'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito,eliminarItem } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

return (
    <Container>
        <Typography variant='h2'>Carrito</Typography>
        {  
            carrito.length > 0 ?
            <>
                {
            carrito.map((prod) => (
                <Box key={prod.title}>
                    <Typography variant='h5'>{prod.title}</Typography>
                    <Typography variant='body1'sx={{padding:1}}>Precio unit: ${prod.price}</Typography>
                    <Typography variant='body1'sx={{padding:1}}>Precio total: ${prod.price * prod.cantidad}</Typography>
                    <Typography variant='body1'sx={{padding:1}}>Cantidad: {prod.cantidad}</Typography>
                    <Button startIcon={<DeleteIcon />} color='error' onClick={() => {eliminarItem(prod)}}>Eliminar</Button>
                    <Divider/>
                </Box>
            ))
        }
                <h2>Precio total: ${precioTotal()}</h2>
                <Button variant='outlined' color="error" onClick={handleVaciar} sx={{margin:1}}>Vaciar Carrito</Button>
                <Link to="/checkout"><Button variant='outlined' color="success" sx={{margin:1}}>Finalizar compra</Button></Link>
            </> :
            <h2>El carrito está vacío</h2>
        }
        
    </Container>
)
}
