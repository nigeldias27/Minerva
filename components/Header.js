// This component refers to the navbar of the website
import logo from "../public/assets/logo.png";
import peslogo from "../public/assets/pesulogo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';




export default function Headers() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  
  


  return (
    
    <div className="w-screen bg-#FCF7FF dark:bg-greyBlack flex flex-row justify-between py-2 px-8 z-10">
       <div style={{ display: 'flex', alignItems: 'center',marginRight: "-400px" }}>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        
        >
        <MenuIcon />
      </IconButton>
    
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          style: {
            backgroundColor: 'black',
            width:"300px"
          },
        }}
      >
        <List>
         <ListItem sx={{justifyContent:'center'}}>
          <Link href={"/aboutUs"}>
          <ListItemButton sx={{color:"white"}}>
            <ListItemText primary="About Us"   />
          </ListItemButton>
          </Link>
          </ListItem>
          <ListItem sx={{justifyContent:'center'}}>
            <Link href={"/aboutUs"}>
          <ListItemButton sx={{color:"white"}}>
            <ListItemText primary="Our Team" />
          </ListItemButton>
          </Link>
          </ListItem>
        </List>
      </Drawer>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Link
          href={"/allnews"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          News
        </Link>
        <Link
          scroll={false}
          href={"/#timeline"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Timeline
        </Link>
        <Link
          scroll={false}
          href={"/#featuringPES"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-4 hover:text-hoverbeigeText"
        >
          Featuring PESU
        </Link>
        <Link
          href={"/#contactus"}
          className="text-#1D1D1D dark:text-white text-xl font-georgia px-3 hover:text-hoverbeigeText"
        >
          Contact Us
        </Link>
        
      </div>

     

      <Link href={"/"} className="flex flex-row items-center">
        <Image className="w-24 sm:w-32 h-xl mr-1 sm:mr-4" src={peslogo} style={{ filter: 'brightness(0%)' }} />
        <Image className="h-xl logo-black" src={logo} style={{ filter: 'brightness(0%)' }} />
      </Link>
      
    </div>
    
   
  );
}
