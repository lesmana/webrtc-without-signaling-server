
function chatlog(msg) {
  chatelement = document.getElementById('chatlog');
  chatelement.innerHTML += '<p>[' + new Date() + '] ' + msg + '</p>';
  chatelement.scrollTop = chatelement.scrollHeight
}

function createPeerConnection() {
  configuration = {
    iceServers: [{
      urls: "stun:stun.stunprotocol.org"}]};
  try {
    peerConnection = new RTCPeerConnection(configuration);
  } catch(err) {
    chatlog('error: ' + err);
  }
  return peerConnection;
}

function handleicecandidate(lasticecandidate) {
  return function(event) {
    if (event.candidate != null) {
      console.log('new candidate');
      console.log(event);
    } else {
      console.log('no new candidates');
      lasticecandidate();
    }
  }
}
