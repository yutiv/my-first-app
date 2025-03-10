import React from "react";
import "./index.css";
const HelloChat = () => {
    const [createp, setCreatep] = React.useState('')
    const [createp2, setCreatep2] = React.useState('')
    const user = () => {
        const container = document.getElementById('container');
        const newElement = document.createElement('p');
        if (document.getElementById('1')) {
            setCreatep(document.querySelector('#input').value)
            newElement.innerHTML = createp
        }
        else {
            newElement.id = "p"
            setCreatep2(document.querySelector('#input').value)
            newElement.innerHTML = createp2
        }
        container.appendChild(newElement);
        document.querySelector('#input').value = ''
    }
    return (<>
        <div id="container">
            <h1>Chat</h1>
            <div id="divi">
                <input type="text" id="input"></input>
                <input type="button" value='click' id="1" onClick={() => user()}></input>
            </div>
        </div>
    </>
    );
};
export { HelloChat }