import {Box, Container, Button} from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ItemCount from "../ItemCount";


export default function ItemDetail({detail}) {
    return (
            <Container sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',}}>
                <Box>
                    <img height="600px" src={`/data/productos/${detail.imagen}`} alt={detail.titulo} />
                </Box>
                <Box>
                    <h2>{detail.nombre}</h2>
                    <p>{detail.precio}</p>
                    <p>{detail.descripcion}</p>
                    <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'space-around',alignItems: 'center',}}>
                        <ItemCount/>
                        <Button>Agregar al Carrito<ShoppingCartOutlinedIcon/></Button>
                    </Box>
                </Box>
            </Container>
    )
}