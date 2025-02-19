import { createTheme } from '@mui/material/styles';
import SimpleBottomNavigation from "./componnents/navigateBar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#1976d2',
      },
    }
  });


  // const [state, setState] = React.useState({
  //   left: false,
  //   right: false,
  // });
  // const toggleDrawer = (anchor, open) => (event) => {

  //   setState({ ...state, [anchor]: open });
  // };

  // const iemsList = (anchor) => (

  //   <Box
  //     sx={{
  //       width: anchor === "right" ||
  //         anchor === "left" ? "auto" : 250,
  //       backgroundColor: "#09212E",
  //       height: '100%'
  //     }}
  //     role="drawer"
  //     onClick={toggleDrawer(anchor, true)}

  //   // onKeyDown={toggleDrawer(anchor, true)}
  //   >
  //   </Box>
  // )
  return (
    SimpleBottomNavigation()
    //   <ThemeProvider theme={theme}>

    //   <div>
    //     < center >
    //       {["left", "right"].map((anchor) => (
    //         <React.Fragment key={anchor}>
    //           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    //           <Drawer
    //             anchor={anchor}
    //             open={state[anchor]}
    //             onClose={toggleDrawer(anchor, false)}
    //             // variant="permanent"

    //             sx={{ display: { xs: "none", sm: "block" }, e: 767 }}
    //           >
    //             {responsiveDrawer}
    //             {iemsList(anchor)}
    //             {/* {upDrawer} */}
    //           </Drawer>
    //         </React.Fragment>))}
    //     </center >
    //     <div>
    //       <Box>
    //         <Drawer
    //           variant="permanent"

    //           sx={{ display: { xs: "none", sm: "block" }, e: 767 }}
    //         >
    //           {responsiveDrawer}
    //         </Drawer>
    //       </Box>
    //       <Box
    //         // variant="permanent"

    //         sx={{ display: { xs: "block", sm: "none" } }}
    //       >
    //         {upDrawer}
    //       </Box>
    //     </div>
    //   </div >
    //   </ThemeProvider>

  );
}

export default App;