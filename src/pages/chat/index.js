import React from "react";
import "./index.css";
import { FormControl, TextField, IconButton, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
const HelloChat = () => {
    // const [avatar, setAvatar] = React.useState('')
    const [message1, setMessage1] = React.useState([]);
    const [message2, setMessage2] = React.useState([]);
    const [messageall, setMessageall] = React.useState([[],[]]);
    const [valInput, setValInput] = React.useState('');
    const handleChange = (event) => {
        setValInput(event.target.value);
    };

    const user = () => {
        console.log(messageall);
       
        // const container = document.getElementById('container');

        // const newElement = document.createElement('p');
        // const newAvatar = document.createElement('Avatar');
// messageall.push(valInput)
// {setMessageall(messageall.key="message1",messageall.value=valInput)}
// console.log(messageall);

        if (document.getElementById('1')) {
            message1.push(valInput)
            // messageall[0].push(valInput)
        // console.log(messageall," hhhhhhhh");

        //   message1.push(message2)
        //   message1.pop(message2)
            // console.log(message1," message1");
            // console.log(messageall," messageall");
            
        //  console.log(messageall.push(message1)," jjjjj");
            
            // if(message2.length>0){
            //     messageall.push(message2)
            //     console.log(messageall);
            //     message1.push(messageall)
            // }
            //  const a= message1.length
            //  a="l"
                // console.log(message1[a]-1);
            //  console.log(setMessage1(message1+message2));
                
            // }
        //    const a= 
        //    console.log(message2.valInput," aaa");
           
        //    a.className="hidden"
            // setMessage2([])
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
            message2.push(valInput)
            // messageall[1].push(valInput)

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
                {/* {console.log(messageall.key="j",messageall.value=valInput)} */}
                {/* {console.log(messageall," hhhhhhh")} */}
                {/* {messageall[0].className=="message1"}
                {messageall[1].className=="message2"}
                {messageall[0].map((message) =>
                    <p key={"message1"+ message} className="message1">{message}</p>
                )}
                {messageall[1].map((message) =>
                    <p key={"message2"+ message} className="message2">{message}</p>
                )} */}
                {message1.map((message) =>
                    <p key={"message1"+ message} className="message1">{message}</p>
                )}
                {message2.map((message) =>
                    <p key={"message2"+message} className="message2">{message}</p>
                )}
            </div>
            <div id="textField" >
                <FormControl id="formControl">
                    <TextField label="Type a message" onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={() => user()} id="1"><Send id="send" /></IconButton>
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