webrtc peer to peer chat without signaling server
-------------------------------------------------

this tech demo demonstrates a peer to peer webrtc connection
without any signaling server.
a free stun server is used if the connection goes over the internet.
a turn server is never used.

since no signaling server is used the negotiation has to be done manually.
that means a so called "offer" has to be copied from the initiator to
the responder. and the "answer" has to be copied from the responder to
the initiator.

goals of this tech demo
-----------------------

have a html css javascript website which only needs to be downloaded once
on each device and is then usable without constant internet connection.
usable in this context means to maintain the peer to peer connection.

have well written and commented source code so others can learn.

ideally everything in one big html file.
secondary: one big html file but still human readable.

motivation
----------

we want to create a multiplayer game playable without setting up a server.
target devices are tablets and smartphones
typically connected in a local network.
target users are families.
a typical situation would be a family in a living room,
each with their own device, wanting to play a game together.

with webrtc we hope to able to create a game which can be played
multiplayer without setting up any server and even without requiring
a constant internet connection.

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

misc
----

inspired by https://github.com/xem/miniWebRTC

which in turn was inspired by https://github.com/cjb/serverless-webrtc

license
-------

Copyright Lesmana Zimmer lesmana@gmx.de

This program is free software.
It is licensed under the GNU AGPL version 3 or later.
That means, in short, you are free use this program for any purpose;
free to study and modify this program to suit your needs;
and free to share this program (in original or modified form) with anyone.
If you share this program you must do so under the same license.
That means you have to provide the source code and grant the same freedoms.
If you use this program as a web service the same rules apply as if sharing.
For details see https://www.gnu.org/licenses/agpl-3.0.html
