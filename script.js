
function createPeerConnection() {
  configuration = {
    iceServers: [{
      urls: "stun:stun.stunprotocol.org"}]};
  try {
    peerConnection = new RTCPeerConnection(configuration);
  } catch(err) {
    errorelement = document.getElementById('initiateerror');
    errorelement.innerHTML = 'error: ' + err;
  }
  peerConnection.onicecandidate = handleicecandidate;
  return peerConnection;
}

function handleicecandidate(event) {
  console.log('handleicecandidate');
  if (event.candidate != null) {
    console.log('new candidate');
    console.log(event);
  } else {
    console.log('no new candidates');
    textelement = document.getElementById('textlocaloffer');
    textelement.value = JSON.stringify(peerConnection.localDescription);
  }
}

