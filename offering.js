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
  offer = peerConnection.localDescription;
  textelement.value = JSON.stringify(offer);
  document.getElementById('offersentbutton').disabled = false;
}

function createOfferDone(offer) {
  console.log('createOfferDone');
  //console.log(offer);
  setLocalPromise = peerConnection.setLocalDescription(offer);
  setLocalPromise.then(setLocalDone, setLocalFailed);
}

function createOfferFailed(reason) {
  console.log('createOfferFailed');
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

function clickoffersent() {
  console.log('clickoffersent');
  document.getElementById('spananswer').classList.toggle('invisible');
  document.getElementById('offersentbutton').disabled = true;
}

function clickanswerpasted() {
  console.log('clickanswerpasted');
  textelement = document.getElementById('answertext');
  textelement.disabled = true;
  answer = JSON.parse(textelement.value);
  setRemotePromise = peerConnection.setRemoteDescription(answer);
  setRemotePromise.then(setRemoteDone, setRemoteFailed);
}

function setRemoteDone(value) {
  console.log('setRemoteDone');
  console.log(value);
}

function setRemoteFailed(reason) {
  console.log('setRemoteFailed');
  console.log(reason);
}

