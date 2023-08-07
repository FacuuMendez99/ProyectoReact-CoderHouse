import { Badge, IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
    return (
        <IconButton sx={{
            marginLeft:2
        }}
        >
            <Badge badgeContent={3} color="info">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    )
}
