import React from "react";
import "./index.css";
import { FormControl, TextField, IconButton, Avatar } from "@mui/material";
import { Send } from "@mui/icons-material"
const HelloChat = () => {
    // let lastMes;
    const [messageall, setMessageall] = React.useState([
        { key: 'message2', value: 'ddd' },
        // { key: 'message1', value: 'jjj' },
        // { key: 'message1', value: 'lll' },
        // { key: 'message2', value: 'ddd' },
        // { key: 'message1', value: 'hjj' },
        // { key: 'message2', value: 'sss' },
        // { key: 'message2', value: 'eee' },
    ]);
    const [valInput, setValInput] = React.useState('');
    const handleChange = (event) => {
        setValInput(event.target.value);
    };

    const user = () => {
        // if (document.getElementById('1')) {
        setMessageall(prevArray => [...prevArray, { key: "message1", value: valInput }]);
        setValInput('')
        // } else {
        //     setMessageall(prevArray => [...prevArray, { key: "message2", value: valInput }]);
        //     setValInput('')
        // }
        // }
    }
    let lastMes = messageall[messageall.length - 1].key;
    {
        console.log(lastMes, " lll");
    }
    return (<>
        <div id="container">
            <div className="messages">
                <div>
                    {messageall.map(m => (m.key) === "message1" ?
                        <div>
                            {console.log(lastMes, (m.key))}
                            {lastMes !== (m.key) ?
                                <div>
                                    {console.log(lastMes, (m.key))}
                                    <Avatar>{m.key.slice(7, 8)}</Avatar>
                                    <p className="message1"> {m.value}</p>
                                </div>
                                :
                                <p className="message1"> {m.value}</p>}
                        </div>
                        :
                        <div>
                            <div>
                                {lastMes !== (m.key) ?
                                    <div>
                                        <Avatar className="message2">{m.key.slice(7, 8)}</Avatar>
                                        <p className="message2"> {m.value}</p>
                                    </div>
                                    :
                                    <p className="message2"> {m.value}</p>
                                }
                            </div>
                            {/* <div>{console.log(lastMes)} */}
                            {/* </div> */}
                        </div>

                    )}
                </div>



                {/* <div>{messageall.map(m =>lastMes == (m.key)
                    ?
                    <div>
                        <Avatar className={m.key}>{m.key.slice(7, 8)}</Avatar>
                        {(m.key) == "message1" ?
                            <p className="message1"> {m.value}</p>
                            :
                            <p className="message2">{m.value}</p>}
                    </div>
                    : (m.key) == "message1" ?
                        <p className="message1"> {m.value}</p>
                        :
                        <p>
                            <p className="message2">{m.value}</p>
                            {/* {console.log(lastMes = m.key, "  lastMes = m.key") */}
                {/* } */}
                {/* </p> */}
                {/* )}
                // </div> */}
                {/* } */}


            </div>
            <div id="textField" >
                <FormControl id="formControl">
                    <TextField label="Type a message" onChange={handleChange} value={valInput}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={() => user()}><Send id="send" /></IconButton>
                            )
                        }}
                    >
                    </ TextField>
                </FormControl>
            </div>
        </div >
    </>
    );
};
export { HelloChat }