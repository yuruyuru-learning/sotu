let ws

window.onload = () => {
  ws = new WebSocket("wss://" + window.location.host + "/websocket")
  ws.onmessage = msg => {
    $("#messageBox").append("<div class='but'><h3>" + msg.data + "</h3></div>")
  }
  ws.onclose = () => {
    ws = new WebSocket("wss://" + window.location.host + "/websocket")
    ws.send("0")
  }
}