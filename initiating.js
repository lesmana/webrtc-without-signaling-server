function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('spaninitiate').classList.toggle('invisible');
  peerConnection = createPeerConnection();
  dataChannel = peerConnection.createDataChannel('chat');
  offerPromise = peerConnection.createOffer();
  offerPromise.then(offerFulfilled, offerRejected);
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

function clicklocalofferdone() {
  console.log('clicklocalofferdone');
  document.getElementById('spanremoteanswer').classList.toggle('invisible');
  document.getElementById('localofferdonebutton').disabled = true;
}

function clickremoteanswer() {
  console.log('clickremoteanswer');
  textelement = document.getElementById('textremoteanswer');
  textelement.disabled = true;
  remoteAnswer = JSON.parse(textelement.value);
  remoteAnswerPromise = peerConnection.setRemoteDescription(remoteAnswer);
  remoteAnswerPromise.then(remoteAnswerFulfilled, remoteAnswerRejected);
}

function remoteAnswerFulfilled(value) {
  console.log('remoteAnswerFulFilled');
  console.log(value);
}

function remoteAnswerRejected(reason) {
  console.log('remoteAnswerRejected');
  console.log(reason);
}

