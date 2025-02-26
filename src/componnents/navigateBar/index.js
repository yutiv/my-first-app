import "./index.css"
import React, { useActionState, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer } from "react";
import { ChatBubble, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction, ToggleButtonGroup } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const [direction, setDirection] = React.useState('ltr')
    const [orientationa, setOrientationa] = React.useState('vertical')
    const match = useMediaQuery('(min-width:676px)')
    console.log(match);
    // {useEffect= (() => {
    //     if (match) {
    //         return;
    //     }
    //     else{
    //         setOrientationa('horizontal')
    //         console.log(orientationa, " oooooooooo");
    //     }
    // })}
    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="left" onClick={() => { setDirection('ltr') }} />
                <BottomNavigationAction label="right" onClick={() => { setDirection('rtl') }} />
            </BottomNavigation>
            <Box dir={direction} >
                {match ?
                    <ToggleButtonGroup orientation={orientationa}>
                        <Link to='/home'><BottomNavigationAction icon={<Home />} label="home" /></Link>
                        <Link to='/chat'><BottomNavigationAction icon={<ChatBubble />} label="chatBubble" /></Link>
                    </ToggleButtonGroup>
                    :
                    //   setOrientationa('horizontal')
                    <ToggleButtonGroup orientation='horizontal' >
                        <Link to='/home'><BottomNavigationAction icon={<Home />} label="home" /></Link>
                        <Link to='/chat'><BottomNavigationAction icon={<ChatBubble />} label="chatBubble" /></Link>
                    </ToggleButtonGroup>
                }
            </Box>
        </div>
    )
}
