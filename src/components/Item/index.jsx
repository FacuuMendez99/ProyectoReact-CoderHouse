import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardMedia, Grid, Typography } from "@mui/material";


export default function Item({producto}) {
    return (
            <Grid item md={4}> 
                <Card sx={{background:"#e1e8ef"}}>
                    <CardMedia 
                        component="img"
                        image={`/data/productos/${producto.image}`}
                    />
                    <Typography 
                        variant="h5"
                        marginLeft={2}
                    >
                        {producto.title}
                    </Typography>
                    <CardActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            alignItems: 'center'
                        }}
                    >
                        <Button><Link to={`/item/${producto.id}`}>Ver más</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}   
