
function chatlog(msg) {
  chatelement = document.getElementById('chatlog');
  newchatentry = document.createElement("p");
  newchatentry.textContent = '[' + new Date() + '] ' + msg;
  chatelement.appendChild(newchatentry);  
  chatelement.scrollTop = chatelement.scrollHeight
}

function createPeerConnection(lasticecandidate) {
  configuration = {
    iceServers: [{
      urls: "stun:stun.stunprotocol.org"}]};
  try {
    peerConnection = new RTCPeerConnection(configuration);
  } catch(err) {
    chatlog('error: ' + err);
  }
  peerConnection.onicecandidate = handleicecandidate(lasticecandidate);
  peerConnection.onconnectionstatechange = handleconnectionstatechange;
  peerConnection.oniceconnectionstatechange = handleiceconnectionstatechange;
  return peerConnection;
}

function handleicecandidate(lasticecandidate) {
  return function(event) {
    if (event.candidate != null) {
      console.log('new ice candidate');
    } else {
      console.log('all ice candidates');
      lasticecandidate();
    }
  }
}

function handleconnectionstatechange(event) {
  console.log('handleconnectionstatechange');
  console.log(event);
}

function handleiceconnectionstatechange(event) {
  console.log('ice connection state: ' + event.target.iceConnectionState);
}

function datachannelopen() {
  console.log('datachannelopen');
  chatlog('connected');
  document.getElementById('chatinput').disabled = false;
  document.getElementById('chatbutton').disabled = false;
}

function datachannelmessage(message) {
  console.log('datachannelmessage');
  console.log(message);
  text = message.data;
  chatlog(text);
}

function chatbuttonclick() {
  console.log('chatbuttonclick');
  textelement = document.getElementById('chatinput');
  text = textelement.value
  dataChannel.send(text);
  chatlog(text);
  textelement.value = '';
}
