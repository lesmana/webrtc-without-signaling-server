function clickremoteoffer() {
  console.log('clickremoteoffer');
  document.getElementById('remoteofferbutton').disabled = true;
  peerConnection = createPeerConnection();
  textelement = document.getElementById('textremoteoffer');
  textelement.disabled = true;
  remoteOffer = JSON.parse(textelement.value);
  remoteOfferPromise = peerConnection.setRemoteDescription(remoteOffer);
  remoteOfferPromise.then(remoteOfferFulfilled, remoteOfferRejected);
}

function remoteOfferFulfilled(value) {
  console.log('remoteOfferFulfilled');
  console.log(value);
  answerPromise = peerConnection.createAnswer();
  answerPromise.then(answerFulfilled, answerRejected);
}

function remoteOfferRejected(reason) {
  console.log('remoteOfferRejected');
  console.log(reason);
}

function answerFulfilled(value) {
  console.log('answerFulFilled');
  console.log(value);
  localAnswerPromise = peerConnection.setLocalDescription(value);
  localAnswerPromise.then(localAnswerFulfilled, localAnswerRejected);
  document.getElementById('spananswer').classList.toggle('invisible');
  textelement = document.getElementById('textlocalanswer');
  textelement.value = JSON.stringify(value);
}

function answerRejected(reason) {
  console.log('answerRejected');
  console.log(reason);
}

function localAnswerFulfilled(value) {
  console.log('localAnswerFulfilled');
  console.log(value);
}

function localAnswerRejected(reason) {
  console.log('localAnswerRejected');
  console.log(reason);
}

