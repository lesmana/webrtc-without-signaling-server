webrtc peer to peer chat without signaling server
-------------------------------------------------

a tech demo.

the signaling is done by copying offer and answer manually.

a stun server is still required if connecting over the internet.

about webrtc
------------

webrtc is a technology for peer to peer connections over the internet.
peer to peer means that the data goes from one browser directly
to the other browser without a server in between.
webrtc was originally developed for video chats but the underlying
technology can be used for any data.

a webrtc connection can involve three kinds of servers:
a signaling server, a stun server, and a turn server.

a signaling server, if used, is only used to negotiate the connection.
once the connection is established a signaling server is no longer required.

a stun server is required to get the internet facing adress.
if you try to connect over a local network then a stun server is not required.
a stun server is also only required in the negotiating phase.

a turn server may be used as a fallback option if a peer to peer connection
could not be established.
a connection over a turn server forms a typical
browser - server - browser connection.

signaling is not part of the webrtc standard.
any means of communication reachable by both peers can be used to negotiate.
for example messaging services, emails, or pen and paper.

a stun server is lightweight and typically free to use for anyone.
one might think of a stun server like a dns server.

a turn server needs to passtrough all data from one end to the other.
therefore it needs to be powerfull and is typically
limited to paying customers.

about this tech demo
--------------------

this tech demo demonstrates a peer to peer webrtc connection
without any signaling server.
a free stun server is used if the connection goes over the internet.
a turn server is never used.

since no signaling server is used the negotiation has to be done manually.
that means a so called "offer" has to be copied from the initiator to
the responder. and the "answer" has to be copied from the responder to
the initiator.

misc
----

inspired by https://github.com/xem/miniWebRTC

which in turn was inspired by https://github.com/cjb/serverless-webrtc
