window.onload = () => {
  let ws = new WebSocket("wss://" + window.location.host + "/websocket")
  ws.onmessage = msg => {
    $("#messageBox").prepend("<li>" + msg.data + "</li>")
  }
  $("#form").on("submit", e => {
    ws.send($("#send").val())
    e.preventDefault()
  })
}