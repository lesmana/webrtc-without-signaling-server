
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
  return peerConnection;
}
