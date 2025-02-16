import React, { createElement, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ChatBubble, Home, OneKk, } from "@mui/icons-material";
import { ListItemText } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

function App() {

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1976d2',
    },
  },
});

 
  const responsiveDrawer = (

    <div style={{
      height: "100%",
    }}>
      <List >
        <ListItemButton >
          <ListItemIcon >
            <Home  color='secondary'/>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon >
            <ChatBubble />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const upDrawer = (
    <div
      style={{
        backgroundColor: "black",
        height: '100%'
      }}
    >
      <List >
        <ListItemButton sx={{ color: "white", margin: '10px' }}>
          <ListItemIcon sx={{ color: "white", margin: '10px' }}>
            <Home />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ color: "white", margin: '10px' }}>
          <ListItemIcon sx={{ color: "white", margin: '10px' }}>
            <ChatBubble />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    // if (
    // event.type === "keydown" &&
    // (event.key === "Tab" || event.key === "Shift")
    // ) 
    // {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
  };

  const iemsList = (anchor) => (

    <Box
      sx={{
        width: anchor === "right" ||
          anchor === "left" ? "auto" : 250,
        backgroundColor: "#09212E",
        height: '100%'
      }}
      role="drawer"
      onClick={toggleDrawer(anchor, true)}

    // onKeyDown={toggleDrawer(anchor, true)}
    >
    </Box>
  )
  return (
    <ThemeProvider theme={theme}>

    <div>
      < center >
        {["left", "right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              // variant="permanent"

              sx={{ display: { xs: "none", sm: "block" }, e: 767 }}
            >
              {responsiveDrawer}
              {iemsList(anchor)}
              {/* {upDrawer} */}
            </Drawer>
          </React.Fragment>))}
      </center >
      <div>
        <Box>
          <Drawer
            variant="permanent"

            sx={{ display: { xs: "none", sm: "block" }, e: 767 }}
          >
            {responsiveDrawer}
          </Drawer>
        </Box>
        <Box
          // variant="permanent"

          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {upDrawer}
        </Box>
      </div>
    </div >
    </ThemeProvider>

  );
}

export default App;