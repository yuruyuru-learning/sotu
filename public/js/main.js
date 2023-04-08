let ws

function sayHi() {
  ws.send("0")
  setTimeout(sayHi, 1000)
}

window.onload = () => {
  ws = new WebSocket("wss://" + window.location.host + "/websocket")
  ws.onmessage = msg => {
    $("#messageBox").append("<div class='but'><h3>" + msg.data + "</h3></div>")
  }
  $("#form").on("submit", e => {
    ws.send($("#send").val())
    e.preventDefault()
  })

  setTimeout(sayHi, 1000)
}