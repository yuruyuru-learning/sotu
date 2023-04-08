let ws

window.onload = () => {
    ws = new ReconnectingWebSocket("wss://" + window.location.host + "/websocket")
    $("#form").on("submit", e => {
      ws.send($("#send").val())
      e.preventDefault()
    })
    ws.onclose = () => {
        ws = new ReconnectingWebSocket("wss://" + window.location.host + "/websocket")
        ws.send("0")
    }
}