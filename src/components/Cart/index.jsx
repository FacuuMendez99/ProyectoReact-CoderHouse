import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

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
                <Box key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                </Box>
            ))
        }
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío</h2>
        }
        
    </Container>
)
}
