import { Typography } from '@mui/material'
import React from 'react'

const categorias = ["Colgantes","Plafones","Lamparas de mesa","Lamparas de pared","Exterior"]


export const ItemListContainer = (props) => {
    return (
        <>
        <div>
            <Typography variant='h1'>{props.nombre}</Typography>
            <ul>
                {
                    categorias.map(categoria => 
                        <ul>
                            <li>{categoria}</li>
                        </ul>
                    )
                }
            </ul>
        </div>
        </>
    )
}