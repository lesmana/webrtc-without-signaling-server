function clickrespond() {
  console.log('clickrespond');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('respondbutton').disabled = true;
  document.getElementById('spanrespond').classList.toggle('invisible');
  peerConnection = createPeerConnection();
  dataChannel = peerConnection.createDataChannel('chat');
}

function clickremoteoffer() {
  console.log('clickremoteoffer');
  document.getElementById('remoteofferbutton').disabled = true;
  textelement = document.getElementById('textremoteoffer');
  textelement.disabled = true;
  remoteOffer = JSON.parse(textelement.value);
  remoteDescriptionPromise = peerConnection.setRemoteDescription(remoteOffer);
  remoteDescriptionPromise.then(remoteDescriptionFulfilled, remoteDescriptionRejected);
}

function remoteDescriptionFulfilled(value) {
  console.log('remoteDescriptionFulfilled');
  console.log(value);
  dataChannel = peerConnection.createDataChannel('chat');
  answerPromise = peerConnection.createAnswer();
  answerPromise.then(answerFulfilled, answerRejected);
}

function remoteDescriptionRejected(reason) {
  console.log('remoteDescriptionRejected');
  console.log(reason);
}

function answerFulfilled(value) {
  console.log('answerFulFilled');
  console.log(value);
  // TODO peerConnection.setLocalDescription(value);
  document.getElementById('spananswer').classList.toggle('invisible');
  textelement = document.getElementById('textlocalanswer');
  textelement.value = JSON.stringify(value);
}

function answerRejected(reason) {
  console.log('answerRejected');
  console.log(reason);
}

