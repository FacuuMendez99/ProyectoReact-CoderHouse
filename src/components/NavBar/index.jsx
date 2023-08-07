import * as React from "react";
import AppBar from '@mui/material/AppBar';
import {Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { CartWidget } from "../CartWidget";

const navLinks = [
    {
        title: "Productos" , path: "#"
    },
    {
        title:"Sobre Nosotros",path : "#"
    },
    {
        title :"Contacto ",  path: "#"
    },
]

function NavBar() {
    const [open,setOpen] = useState(false);
    
    return (
            <AppBar position="sticky" color="default">
                <Toolbar>
                    <Typography variant="h5" flexGrow={1}>Chandelier</Typography>
                    <Box sx={
                        {display:{
                            xs:'none',
                            md:'flex'}
                        }
                    }>
                        {
                            navLinks.map(item => (
                                
                                <Button 
                                    color="inherit" 
                                    key={item.title}
                                    component="a"
                                    href={item.path}
                                >{item.title}</Button>
                                )
                            )
                        }
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={
                            {display:{
                                xs:'none',
                                md:'flex'
                                },
                                marginLeft:2
                            }}/>
                    <CartWidget ></CartWidget>
                    <Divider orientation="vertical" variant="middle" flexItem sx={
                            {display:{
                                xs:'flex',
                                md:'none'
                                },
                                marginX:2
                            }}/>
                    <IconButton 
                        sx={
                            {display:{
                                xs:'flex',
                                md:'none'
                                }
                            }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Toolbar>
                <Drawer
                    open={open}
                    anchor="right"
                    onClose={()=>setOpen(false)}
                > 
                <List>
                    {
                        navLinks.map(item => (
                            <>
                            <ListItem
                            key={item.title}
                            >
                                <ListItemButton
                                component="a"
                                href={item.path}>
                                    <ListItemText primary={item.title}/>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            </>
                            )
                            )
                        }
                        </List>
                </Drawer>
            </AppBar>
        )
}

export default NavBar