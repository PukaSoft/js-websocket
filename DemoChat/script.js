let ws = null;
const setText = data => {
    const msg = `<div>${data}</div>`
    chat.insertAdjacentHTML('beforeend',msg);
}

btnConnect.addEventListener('click', e => {
    ws = new WebSocket('ws://echo.websocket.org');
    ws.onopen = () => setText('Conectado');
    ws.onclose = () => setText('Desconectado');
    ws.onerror = r => setText(r);
    ws.onmessage = r => {
        setText(r.data);
    }

})

btnDisconnect.addEventListener('click', e => {
    ws.close();

})

btnSend.addEventListener('click',e => {
ws.send(txtMsg.value)

})


