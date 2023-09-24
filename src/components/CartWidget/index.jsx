import { Badge, IconButton } from "@mui/material"
import React, { useContext } from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context";

export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <IconButton sx={{marginLeft:2}}>
            <Badge badgeContent={cantidadEnCarrito()} color="info">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}
