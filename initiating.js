function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('spanoffer').classList.toggle('invisible');
  peerConnection = createPeerConnection(lasticecandidate);
  dataChannel = peerConnection.createDataChannel('chat');
  createOfferPromise = peerConnection.createOffer();
  createOfferPromise.then(createOfferDone, createOfferFailed);
}

function lasticecandidate() {
  console.log('lasticecandidate');
  textelement = document.getElementById('offertext');
  textelement.value = JSON.stringify(peerConnection.localDescription);
  document.getElementById('offersentbutton').disabled = false;
}

function createOfferDone(offer) {
  console.log('createOfferDone');
  console.log(offer);
  setOfferPromise = peerConnection.setLocalDescription(offer);
  setOfferPromise.then(setOfferDone, setOfferFailed);
}

function createOfferFailed(reason) {
  console.log('createOfferFailed');
  console.log(reason);
}

function setOfferDone(value) {
  console.log('setOfferDone');
  console.log(value);
}

function setOfferFailed(reason) {
  console.log('setOfferFailed');
  console.log(reason);
}

function clickoffersent() {
  console.log('clickoffersent');
  document.getElementById('spananswer').classList.toggle('invisible');
  document.getElementById('offersentbutton').disabled = true;
}

function clickanswerpasted() {
  console.log('clickanswerpasted');
  textelement = document.getElementById('answertext');
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

