function clickofferpasted() {
  console.log('clickremoteoffer');
  document.getElementById('offerpastedbutton').disabled = true;
  peerConnection = createPeerConnection(lasticecandidate);
  peerConnection.ondatachannel = handledatachannel;
  textelement = document.getElementById('offertext');
  textelement.disabled = true;
  offer = JSON.parse(textelement.value);
  setOfferPromise = peerConnection.setRemoteDescription(offer);
  setOfferPromise.then(setOfferDone, setOfferFailed);
}

function lasticecandidate() {
  console.log('lasticecandidate');
  textelement = document.getElementById('answertext');
  textelement.value = JSON.stringify(peerConnection.localDescription);
}

function handledatachannel(event) {
  console.log('handledatachannel');
  console.log(event);
  // TODO dataChannel = event.channel;
}

function setOfferDone(value) {
  console.log('setOfferDone');
  //console.log(value);
  createAnswerPromise = peerConnection.createAnswer();
  createAnswerPromise.then(createAnswerDone, createAnswerFailed);
}

function setOfferFailed(reason) {
  console.log('setOfferFailed');
  console.log(reason);
}

function createAnswerDone(answer) {
  console.log('createAnswerDone');
  //console.log(answer);
  setAnswerPromise = peerConnection.setLocalDescription(answer);
  setAnswerPromise.then(setAnswerDone, setAnswerFailed);
  document.getElementById('spananswer').classList.toggle('invisible');
}

function createAnswerFailed(reason) {
  console.log('createAnswerFailed');
  console.log(reason);
}

function setAnswerDone(value) {
  console.log('setAnswerDone');
  //console.log(value);
}

function setAnswerFailed(reason) {
  console.log('setAnswerFailed');
  console.log(reason);
}

