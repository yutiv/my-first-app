import React from "react";
import "./index.css";
import { FormControl, TextField, IconButton, InputAdornment, Avatar } from "@mui/material";
import { Send } from "@mui/icons-material"
const HelloChat = () => {
    const [avatar, setAvatar] = React.useState('')
    const [valInput, setValInput] = React.useState('');
    const handleChange = (event) => {
        setValInput(event.target.value);
    };

    const user = () => {
        const container = document.getElementById('container');
        const newElement = document.createElement('p');
        const newAvatar = document.createElement('Avatar');

        if (document.getElementById('1')) {
            if (avatar != 'I') {
                setAvatar('I')
                newAvatar.id = 'avatar'
                newAvatar.innerHTML = avatar
                container.appendChild(newAvatar);
            }
            newElement.innerHTML = valInput
        }
        else {
            newElement.id = "p"
            newAvatar.id = 'avatar1'
            if (avatar != 'y') {
                setAvatar('y')
                newAvatar.innerHTML = avatar
                container.appendChild(newAvatar);
            }
            newElement.innerHTML = valInput
        }
        container.appendChild(newElement);
    }
    return (<>
        <div id="container">
            <div id="textField" >
                <FormControl id="formControl" orientation="vertical">
                    <TextField label="Type a message" onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => user()} ><Send id="send" /></IconButton>
                                </InputAdornment>
                            )
                        }}
                    >
                    </ TextField>
                </FormControl>
            </div>
        </div>
    </>
    );
};
export { HelloChat }