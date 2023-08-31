import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Grid} from "@mui/material"
import React from "react"
import Item from "../../components/Item"


export const ItemListContainer = (props) => {
    const[productos, setProductos] = useState([])
    const {id} = useParams ()

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("/data/data.json")
            const productos = await response.json()

            const filtrarProducts = productos.filter(producto => producto.categoria === id)
            if(filtrarProducts.length > 0) return setProductos(filtrarProducts)
            setProductos(productos)
        }

        getProducts()

    }, [id])

    return (
        <Grid container spacing={4}>
            {productos.map(producto => <Item producto={producto} key={producto.id}/>)}
        </Grid>
                
    )
}