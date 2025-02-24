import "./index.css"
import React from "react";
import { ChatBubble, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction, ToggleButtonGroup } from "@mui/material";

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
                    <BottomNavigationAction icon={<Link to='/router/home'><Home /></Link>} label="home" />
                    <BottomNavigationAction icon={<Link to='/router/chat'><ChatBubble /></Link>} label="chatBubble" />
                </ToggleButtonGroup>
            </Box>
        </div>
    )
}
