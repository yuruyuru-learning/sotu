let ws

function sayHi() {
    ws.reconnect()
    ws.send("0")
    setTimeout(sayHi, 1000)
}

window.onload = () => {
    ws = new WebSocket("wss://" + window.location.host + "/websocket")
    $("#form").on("submit", e => {
      ws.reconnect()
      ws.send($("#send").val())
      e.preventDefault()
    })

    setTimeout(sayHi, 1000)
}