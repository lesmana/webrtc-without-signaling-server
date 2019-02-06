function clickofferpasted() {
  console.log('clickremoteoffer');
  document.getElementById('buttonofferpasted').disabled = true;
  peerConnection = createPeerConnection(lasticecandidate);
  peerConnection.ondatachannel = handledatachannel;
  textelement = document.getElementById('textoffer');
  textelement.readOnly = true;
  offer = JSON.parse(textelement.value);
  setRemotePromise = peerConnection.setRemoteDescription(offer);
  setRemotePromise.then(setRemoteDone, setRemoteFailed);
}

function lasticecandidate() {
  console.log('lasticecandidate');
  textelement = document.getElementById('textanswer');
  answer = peerConnection.localDescription
  textelement.value = JSON.stringify(answer);
}

function handledatachannel(event) {
  console.log('handledatachannel');
  console.log(event);
  // TODO dataChannel = event.channel;
}

function setRemoteDone(value) {
  console.log('setRemoteDone');
  //console.log(value);
  createAnswerPromise = peerConnection.createAnswer();
  createAnswerPromise.then(createAnswerDone, createAnswerFailed);
}

function setRemoteFailed(reason) {
  console.log('setRemoteFailed');
  console.log(reason);
}

function createAnswerDone(answer) {
  console.log('createAnswerDone');
  //console.log(answer);
  setLocalPromise = peerConnection.setLocalDescription(answer);
  setLocalPromise.then(setLocalDone, setLocalFailed);
  document.getElementById('spananswer').classList.toggle('invisible');
}

function createAnswerFailed(reason) {
  console.log('createAnswerFailed');
  console.log(reason);
}

function setLocalDone(value) {
  console.log('setLocalDone');
  //console.log(value);
}

function setLocalFailed(reason) {
  console.log('setLocalFailed');
  console.log(reason);
}

