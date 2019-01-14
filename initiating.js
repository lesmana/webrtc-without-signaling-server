function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('spaninitiate').classList.toggle('invisible');
  peerConnection = createPeerConnection();
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

