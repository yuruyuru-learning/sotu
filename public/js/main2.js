window.onload = () => {
    let ws = new WebSocket("wss://" + window.location.host + "/websocket")
    $("#form").on("submit", e => {
      ws.send($("#send").val())
      e.preventDefault()
    })
  }