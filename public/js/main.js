window.onload = () => {
  let ws = new WebSocket("ws://" + window.location.host + "/websocket")
  ws.onmessage = msg => {
    $("#messageBox").prepend("<li>" + msg.data + "</li>")
  }
  $("#form").on("submit", e => {
    ws.send($("#send").val())
    $("#send").val("")
    e.preventDefault()
  })
}