import {Box, Container} from "@mui/material"
import ItemCount from "../ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context";


export default function ItemDetail({detail}) {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < detail.stock && setCantidad(cantidad + 1)
    }


    return (
            <Container sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <Box>
                    <img height="600px" src={`/data/productos/${detail.image}`} alt={detail.title} />
                </Box>
                <Box>
                    <h2>{detail.title}</h2>
                    <p>{detail.price}</p>
                    <p>{detail.description}</p>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'space-around',alignItems: 'center',}}>
                        <ItemCount
                            cantidad={cantidad}
                            handleSumar={handleSumar}
                            handleRestar={handleRestar}
                            handleAgregar={() => { agregarAlCarrito(detail, cantidad) }}
                        />
                    </Box>
                </Box>
            </Container>
    )
}