import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Box, Divider, Drawer, IconButton, List, ListItemButton, Toolbar, Typography, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { CartWidget } from "../CartWidget";

function Secciones() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <List sx={{
            display:{
                sx:"inline-flex",
                md:"flex"
                }
            }}>
            <ListItemButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                Productos
            </ListItemButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                "aria-labelledby": "basic-button",
                }}
                >
                    <MenuItem onClick={handleClose}>Colgantes</MenuItem>
                    <MenuItem onClick={handleClose}>Plafones</MenuItem>
                    <MenuItem onClick={handleClose}>Lamparas de Mesa</MenuItem>
                    <MenuItem onClick={handleClose}>Lamparas de Pared</MenuItem>
                    <MenuItem onClick={handleClose}>Exterior</MenuItem>
            </Menu>
            <ListItemButton>Sobre Nosotros</ListItemButton>
            <ListItemButton>Contacto</ListItemButton>
        </List>
    )
}

export default function NavBar() {
    const [open,setOpen] = useState(false);
    
    return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Typography variant="h5" flexGrow={1}>Chandelier</Typography>
                    <Box sx={
                        {display:{
                            xs:"none",
                            md:"flex"}
                        }}>
                    <Secciones/>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={
                            {display:{
                                xs:"none",
                                md:"flex"
                                },
                                marginLeft:2
                            }}/>
                    <CartWidget/>
                    <Divider orientation="vertical" variant="middle" flexItem sx={
                            {display:{
                                xs:"flex",
                                md:"none"
                                },
                                marginX:2
                            }}/>
                    <IconButton 
                        sx={{
                            display:{
                                xs:"flex",
                                md:"none"
                                }
                            }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
                <Drawer
                    open={open}
                    anchor="right"
                    onClose={()=>setOpen(false)}
                > 
                    <Secciones/>
                </Drawer>
            </AppBar>
        )
}