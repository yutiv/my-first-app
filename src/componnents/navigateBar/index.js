import "./index.css"
import React from "react";
import { ChatBubble, Home } from "@mui/icons-material";
import { Box, BottomNavigation, BottomNavigationAction, List, ToggleButtonGroup } from "@mui/material";
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    function changeToRTL() {
        document.getElementsByClassName('direction-ltr').item(0).className = 'direction-rtl';
    }
    function changeToLTR() {
        document.getElementsByClassName('direction-rtl').item(0).className = 'direction-ltr';
    }
    return (
        <Box className='box' >
            <List>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="left" onClick={() => { changeToLTR() }} />
                    <BottomNavigationAction label="right" onClick={() => { changeToRTL() }} />
                </BottomNavigation>
                <Box className="direction-ltr">
                    <ToggleButtonGroup orientation="vertical" >
                        <BottomNavigationAction label="chatBubble" icon={<ChatBubble />} />
                        <BottomNavigationAction label="home" icon={<Home />} />
                    </ToggleButtonGroup>
                </Box>
            </List>
        </Box>
    )
}
