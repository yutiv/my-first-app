import "./index.css"
import React from "react";
import { ChatBubble, Home } from "@mui/icons-material";
import { Box, BottomNavigation, BottomNavigationAction, List, ToggleButtonGroup } from "@mui/material";
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const [direction, setDirection] = React.useState('ltr')
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
            <Box dir={direction}>
                <ToggleButtonGroup orientation="vertical" >
                    <BottomNavigationAction label="chatBubble" icon={<ChatBubble />} />
                    <BottomNavigationAction label="home" icon={<Home />} />
                </ToggleButtonGroup>
            </Box>
        </div>
    )
}
