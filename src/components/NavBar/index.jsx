import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Box, Divider, List, ListItemButton, Toolbar, Typography,} from "@mui/material";
import { CartWidget } from "../CartWidget";
import {Link} from "react-router-dom";

export default function NavBar() {
    
    return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Typography variant="h5" flexGrow={1}>
                        <Link to="/">
                            Chandelier
                        </Link>
                    </Typography>
                    <Box sx={{}}>
                        <List sx={{display:"inline-flex"}} >
                                <Link to="categoryId/colgante">
                                    <ListItemButton>
                                            Colgantes
                                    </ListItemButton>
                                </Link>
                                <Link to="categoryId/plafon">
                                    <ListItemButton>
                                        Plafones
                                    </ListItemButton>
                                </Link>
                                <Link to="categoryId/pared">
                                    <ListItemButton>
                                        Lamparas de Pared
                                    </ListItemButton>
                                </Link>
                                <Link to="categoryId/mesa">
                                    <ListItemButton>
                                        Lamparas de Mesa
                                    </ListItemButton>
                                </Link>
                                <Link to="categoryId/exterior">
                                    <ListItemButton>
                                        Exterior
                                    </ListItemButton>
                                </Link>
                        </List>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <Link to="carrito">
                        <CartWidget/>
                    </Link>
                </Toolbar>
            </AppBar>
        )
}