let ws = null;
const setText = data => {
    const msg = `<div>${data}</div>`
    chat.insertAdjacentHTML('beforeend',msg);
}

const setMessage = data => {
    const msg = `<div>
                    <span>${data.name}</span> : 
                    <span>${data.message}</span>
                </div>`;
    chat.insertAdjacentHTML('beforeend',msg);

}

btnConnect.addEventListener('click', e => {
    ws = new WebSocket('ws://echo.websocket.org');
    ws.onopen = () => setText('Conectado');
    ws.onclose = () => setText('Desconectado');
    ws.onerror = r => setText(r);
    ws.onmessage = r => {
        const msg = JSON.parse(r.data)
        setMessage(msg);
    }

})

btnDisconnect.addEventListener('click', e => {
    ws.close();

})

btnSend.addEventListener('click',e => {
    const msg = {
        name : txtName.value,
        message : txtMsg.value
    }
ws.send(JSON.stringify(msg))

})


