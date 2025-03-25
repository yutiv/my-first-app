import React from "react";
import "./index.css";
import { FormControl, TextField, IconButton, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
const HelloChat = () => {
    // const [avatar, setAvatar] = React.useState('')
    // const [message1, setMessage1] = React.useState([]);
    // const [message2, setMessage2] = React.useState([]);
    const [messageall, setMessageall] = React.useState([{}]);
    const [valInput, setValInput] = React.useState('');
    const handleChange = (event) => {
        setValInput(event.target.value);
    };

    const user = () => {
        // const newAvatar = document.createElement('Avatar');
        if (document.getElementById('1')) {
            // message1.push(valInput)
            messageall.push({ key: "message1", value: valInput })
            //   message1.push(message2)
            //   message1.pop(message2)
            // if (avatar !== 'I') {
            // setAvatar('I')
            // newAvatar.id = 'avatar'
            // newAvatar.innerHTML = avatar
            // container.appendChild(newAvatar);
            // newElement.id = 'one'
            //                 if(avatar=='I'){
            //             newAvatar.id='other'
            // }
            // }
            // container.appendChild(newAvatar);
            // newElement.id='other'
        }
        else {
            // message2.push(valInput)
            messageall.push({ key: "message2", value: valInput })
            // newAvatar.id = 'avatar1'
            // if (avatar !== 'y') {
            // setAvatar('y')
            // newAvatar.innerHTML = avatar
            // container.appendChild(newAvatar);
            // newElement.id = 'tow'
        }
        setValInput('')
        // }
        // container.appendChild(newAvatar);
    }
    return (<>
        <div id="container">
            <div className="messages">
                {messageall.map(m => (m.key) == "message1" ? <p className="message1">{m.value}</p> : <p className="message2">{m.value}</p>)}
            </div>
            <div id="textField" >
                <FormControl id="formControl">
                    <TextField label="Type a message" onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={() => user()}><Send id="send" /></IconButton>
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