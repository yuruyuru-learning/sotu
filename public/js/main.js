window.onload = () => {
  let ws = new WebSocket("wss://" + window.location.host + "/websocket")
  ws.onmessage = msg => {
    $("#messageBox").append("<h3>" + msg.data + "</h3>")
  }
  $("#form").on("submit", e => {
    ws.send($("#send").val())
    $("#send").val("")
    e.preventDefault()
  })
}