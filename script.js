
function createPeerConnection() {
  configuration = {
    iceServers: [{
      urls: "stun:stun.stunprotocol.org"}]};
  try {
    peerConnection = new RTCPeerConnection(configuration);
  } catch(err) {
    errorelement = document.getElementById('initiateerror');
    errorelement.innerHTML = 'error: ' + err;
  }
  peerConnection.onicecandidate = handleicecandidate;
  return peerConnection;
}

function clickinitiate() {
  console.log('clickinitiate');
  document.getElementById('initiatebutton').disabled = true;
  document.getElementById('respondbutton').disabled = true;
  document.getElementById('spaninitiate').classList.toggle('invisible');
  peerConnection = createPeerConnection();
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

