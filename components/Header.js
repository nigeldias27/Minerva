// This component refers to the navbar of the website
import logo from "../public/assets/logo.png";
import peslogo from "../public/assets/pesulogo.png";
import event4 from "../public/assets/minerva.png";
import event5 from "../public/assets/pesu.png";
import Image from "next/image";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function Headers(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  /*                    props.dark
                      ? localStorage.setItem("mode", "")
                      : localStorage.setItem("mode", "dark");
                    props.dark ? props.setDark(false) : props.setDark(true); */
  return (
    <div className={props.dark == true ? "dark" : ""}>
      <div className="w-screen bg-#FCF7FF dark:bg-greyBlack flex flex-row justify-between md:px-3 lg:py-2 lg:px-8 z-10">
        <div className="flex flex-row">
          <div className="flex flex-row px-2">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
            >
              <CgMenuLeft className="text-greyBlack dark:text-white " />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{
                style: {
                  backgroundColor: "black",
                  width: "300px",
                },
              }}
            >
              <List>
                <ListItem
                  sx={{
                    justifyContent: "center",
                    fontFamily: "var(--font-georgia)",
                  }}
                >
                  <Link href={"/aboutUs"}>
                    <ListItemButton
                      sx={{ color: "white", fontFamily: "var(--font-georgia)" }}
                    >
                      <ListItemText
                        primary="About Us"
                        className="font-georgia"
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center" }}>
                  <Link href={"/ourteam"}>
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText primary="Our Team" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem
                  sx={{ justifyContent: "center" }}
                  className="md:hidden"
                >
                  <Link href={"/allnews"}>
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText primary="News" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem
                  sx={{ justifyContent: "center" }}
                  className="md:hidden"
                >
                  <Link href={"/#timeline"}>
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText primary="Timeline" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem
                  sx={{ justifyContent: "center" }}
                  className="md:hidden"
                >
                  <Link href={"/#featuringPES"}>
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText primary="Featuring PES" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem
                  sx={{ justifyContent: "center" }}
                  className="md:hidden"
                >
                  <Link href={"/#contactus"}>
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem sx={{ justifyContent: "center" }}>
                  <Link
                    href={""}
                    onClick={() => {
                      props.dark
                        ? localStorage.setItem("mode", "")
                        : localStorage.setItem("mode", "dark");
                      props.dark ? props.setDark(false) : props.setDark(true);
                    }}
                  >
                    <ListItemButton sx={{ color: "white" }}>
                      <ListItemText
                        primary={props.dark ? "Light mode" : "Dark mode"}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </div>
          <div className="hidden  md:flex md:flex-row md:items-center">
            <Link
              href={"/allnews"}
              className="text-#1D1D1D dark:text-white md:text-[16px] lg:text-xl font-georgia px-8 hover:text-hoverbeigeText"
            >
              News
            </Link>
            <Link
              scroll={false}
              href={"/#timeline"}
              className="text-#1D1D1D dark:text-white md:text-[16px] lg:text-xl font-georgia px-8 hover:text-hoverbeigeText"
            >
              Timeline
            </Link>
            <Link
              scroll={false}
              href={"/#featuringPES"}
              className="text-#1D1D1D dark:text-white md:text-[16px] lg:text-xl font-georgia px-8 hover:text-hoverbeigeText"
            >
              Featuring PESU
            </Link>
            <Link
              href={"/#contactus"}
              className="text-#1D1D1D dark:text-white md:text-[16px] lg:text-xl font-georgia px-8 hover:text-hoverbeigeText"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <Link href={"/"} className="flex flex-row items-center pr-1">
          <Image
            className="w-[62.15px] h-[21px] sm:w-[62.15px] sm:h-[21px] md:w-[125.82px] md:h-[44px] lg:w-[125.82px] lg:h[44px]  mr-1 md:mr-4"
            src={peslogo}
            style={{
              filter:
                props.dark == true ? "brightness(100%)" : "brightness(0%)",
            }}
          />
          <Image
            className="w-[62.15px] h-[21px] sm:w-[62.15px] sm:h-[21px] md:w-[125.82px] md:h-[44px] lg:w-[125.82px] lg:h[44px] logo-black "
            src={logo}
            style={{
              filter:
                props.dark == true ? "brightness(100%)" : "brightness(0%)",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
