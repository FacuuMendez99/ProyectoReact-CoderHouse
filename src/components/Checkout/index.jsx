import React, { useContext, useState } from 'react'
import {Form, useForm} from "react-hook-form"
import { CartContext } from '../../context';
import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';

export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }


return (
    <Container>
        <Typography variant='h2'>Checkout</Typography>
        <form onSubmit={handleSubmit(comprar)}>
    <Stack
        direction="column"
        spacing={5}
        width="50%"
    >
                <TextField id="standard-basic" type="text" label="Nombre" variant="standard" {...register("nombre")}/>
                
                <TextField id="standard-basic" type="email" label="E-mail" variant="standard" {...register("email")}/>
                
                <TextField id="standard-basic" type="phone" label="Teléfono" variant="standard" {...register("telefono")}/>
                
                <Button variant="outlined" color="success" endIcon={<SendIcon />} type="submit" >Enviar</Button>
        </Stack>
            </form>
    </Container>
            )
}
