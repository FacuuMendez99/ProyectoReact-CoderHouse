import { useState, useEffect } from "react"
import {Grid} from "@mui/material"
import React from "react"
import Item from "../../components/Item"
import { collection, getDocs,query, where } from "firebase/firestore"
import { db } from "../../firebase/client"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const[productos, setProductos] = useState([])
    const productsRef = collection(db, "products")
    const { id } = useParams()

    const getProducts = async () => {
        const data = await getDocs(productsRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        
        if (id !== undefined) {
            const q = query(productsRef, where("categoryId", "==", id))
            const querySnapshot = await getDocs(q)
            setProductos(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        }else {
            setProductos(dataFiltrada)
        }
}

useEffect(() => {
    getProducts()
    }, [id])


    return (
        <Grid container spacing={2} padding={2}>
            {productos.map(producto => <Item producto={producto} key={producto.id}/>)}
        </Grid>
    )
}