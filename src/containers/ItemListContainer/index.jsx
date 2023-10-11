import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import Item from "../../components/Item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useParams } from "react-router-dom";

const useProducts = (id) => {
    const [productos, setProductos] = useState([]);
    const productsRef = collection(db, "products");

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const q = query(productsRef, where("categoryId", "==", id));
                const querySnapshot = await getDocs(q);
                setProductos(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            } else {
                const data = await getDocs(productsRef);
                setProductos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            }
        };

        fetchData();
    }, [id]);

    return productos;
};

export const ItemListContainer = () => {
    const { id } = useParams();
    const productos = useProducts(id);

    return (
        <Grid container spacing={2} padding={2}>
            {productos.map(producto => <Item producto={producto} key={producto.id}/>)}
        </Grid>
    );
};