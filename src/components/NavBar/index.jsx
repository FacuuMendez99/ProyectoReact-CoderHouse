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
                                <Link to="categorias/colgante">
                                    <ListItemButton>
                                            Colgantes
                                    </ListItemButton>
                                </Link>
                                <Link to="categorias/plafon">
                                    <ListItemButton>
                                        Plafones
                                    </ListItemButton>
                                </Link>
                                <Link to="categorias/pared">
                                    <ListItemButton>
                                        Lamparas de Pared
                                    </ListItemButton>
                                </Link>
                                <Link to="categorias/mesa">
                                    <ListItemButton>
                                        Lamparas de Mesa
                                    </ListItemButton>
                                </Link>
                                <Link to="categorias/exterior">
                                    <ListItemButton>
                                        Exterior
                                    </ListItemButton>
                                </Link>
                        </List>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
        )
}