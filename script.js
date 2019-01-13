
function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('spanbuttons').classList.toggle('invisible');
  document.getElementById('spaninitiate').classList.toggle('invisible');
  configuration = {
    iceServers: [{
      urls: "stun:stun.stunprotocol.org"}]};
  peerConnection = new RTCPeerConnection(configuration);
  peerConnection.onicecandidate = handleicecandidate;
  dataChannel = peerConnection.createDataChannel('chat');
  offerPromise = peerConnection.createOffer();
  offerPromise.then(offerFulfilled, offerRejected);
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

function offerFulfilled(value) {
  console.log('offerFulFilled');
  console.log(value);
  localDescriptionPromise = peerConnection.setLocalDescription(value);
  localDescriptionPromise.then(localDescriptionFulfilled, localDescriptionRejected);
}

function offerRejected(reason) {
  console.log('offerRejected');
  console.log(reason);
}

function localDescriptionFulfilled(value) {
  console.log('localDescriptionFulfilled');
  console.log(value);
}

function localDescriptionRejected(reason) {
  console.log('localDescriptionRejected');
  console.log(reason);
}

function clickrespond() {
  console.log('clickrespond');
  document.getElementById('spanbuttons').classList.toggle('invisible');
  document.getElementById('spanrespond').classList.toggle('invisible');
}
