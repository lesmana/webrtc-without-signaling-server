function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('spaninitiate').classList.toggle('invisible');
  peerConnection = createPeerConnection(lasticecandidate);
  dataChannel = peerConnection.createDataChannel('chat');
  offerPromise = peerConnection.createOffer();
  offerPromise.then(offerFulfilled, offerRejected);
}

function lasticecandidate() {
  console.log('lasticecandidate');
  textelement = document.getElementById('offertext');
  textelement.value = JSON.stringify(peerConnection.localDescription);
  document.getElementById('offersentbutton').disabled = false;
}

function offerFulfilled(value) {
  console.log('offerFulFilled');
  console.log(value);
  localOfferPromise = peerConnection.setLocalDescription(value);
  localOfferPromise.then(localOfferFulfilled, localOfferRejected);
}

function offerRejected(reason) {
  console.log('offerRejected');
  console.log(reason);
}

function localOfferFulfilled(value) {
  console.log('localOfferFulfilled');
  console.log(value);
}

function localOfferRejected(reason) {
  console.log('localOfferRejected');
  console.log(reason);
}

function clickoffersent() {
  console.log('clickoffersent');
  document.getElementById('spanremoteanswer').classList.toggle('invisible');
  document.getElementById('offersentbutton').disabled = true;
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

