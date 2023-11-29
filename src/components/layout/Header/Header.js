import "./Header.css";
import { Link } from "react-router-dom";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import SunDim from "../../../assets/SunDim.svg";
import MagnifyingGlass from "../../../assets/MagnifyingGlass.svg";
import User from "../../../assets/User.svg";
import podium from "../../../assets/podium 1.svg";
import frame from "../../../assets/frame 1.svg";
import book from "../../../assets/IcRoundMenuBook 1.svg";
import MdiNewspaper from "../../../assets/MdiNewspaper 1.svg";

const drawerWidth = "100%";
const appBarBackground = "#0E0E0E";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  flexWrap: "wrap",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        open={open}
        sx={{
          top: "0",
          backgroundColor: appBarBackground,
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "40px",
              }}
            >
              LOGO
            </Link>
          </Typography>
          <div className="flex" >
            <Link to="/#" className="mr-5">
              <img src={SunDim} alt="" width={20}></img>
            </Link>
            <Link to="/#" className="mr-5">
              <img src={MagnifyingGlass} alt="" width={20}></img>
            </Link>
            <Link to="/login" className="mr-5">
              <img src={User} alt="" width={20}></img>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // paddingTop: "64px",
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white"
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{color:"white"}} />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <Typography ml={15} variant="h6">
              Menu
            </Typography>
          </DrawerHeader>
          {/* <Divider /> */}
          <List>
            {[
              { text: "Anime", image: frame },
              { text: "Truyện tranh", image: book },
              { text: "Tin tức", image: MdiNewspaper },
              { text: "Bảng xếp hạng", image: podium },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "24px", marginRight: "12px" }}
                  />
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* <Divider /> */}
        </Drawer>
      </Box>
    </Box>
  );
}
