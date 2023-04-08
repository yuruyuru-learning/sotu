let ws

window.onload = () => {
    ws = new WebSocket("wss://" + window.location.host + "/websocket")
    $("#form").on("submit", e => {
      ws.send($("#send").val())
      e.preventDefault()
    })
    ws.onclose = () => {
        ws = new WebSocket("wss://" + window.location.host + "/websocket")
        ws.send("0")
    }
}