import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardMedia, Grid, Typography } from "@mui/material";


export default function Item({producto}) {
    return (
            <Grid item md={4}> 
                <Card>
                    <CardMedia 
                    image={`/data/productos/${producto.imagen}`}
                    sx={{width:"200px",  height:"200px"}}>
                    </CardMedia>
                    <Typography variant="h5">
                        {producto.nombre}
                    </Typography>
                    <CardActions>
                        <Button>Agregar al Carrito</Button>
                        <Button><Link to={`/item/${producto.id}`}>Ver más</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}   
