---
title: "802.1X - EAPOL"
created: 2019-11-13T18:22:18.371-06:00
modified: 2026-05-21T03:54:20.534-05:00
parent: "[[Authentication Frameworks]]"
children: []
---
<strong>802.1</strong><strong>X (EAPOL)</strong> is an IEEE Standard for port-based Network Access Control (PNAC). It is part of the IEEE 802.1 group of networking protocols. It provides an authentication mechanism to devices wishing to attach to a LAN or [[2 - Wireless Local Area Network (WLAN)|WLAN]].

<strong>802.1</strong><strong>X (EAPOL)</strong> defines the encapsulation of the [[Extensible Authentication Protocol (EAP)]] over [IEEE 802](https://en.wikipedia.org/wiki/IEEE_802), which is known as <strong>EAP over LAN (EAPOL)</strong>.

<strong>802.1</strong><strong>X (EAPOL)</strong> was originally designed for:
- [[802.3 - Ethernet]]

but was clarified to suit other IEEE 802 LAN technologies such as:
- [[802.11 - WiFi／Wi-Fi|802.11 - WiFi/Wi-Fi]] - used in WPA-Enterprise
- [Fiber Distributed Data Interface](https://en.wikipedia.org/wiki/Fiber_Distributed_Data_Interface)

# Overview
![[802.1X - EAPOL/802.1X-protocols.png|400]]

802.1X authentication involves three parties: a supplicant, an authenticator, and an authentication server. The <strong>supplicant</strong> is a client device (such as a laptop) that wishes to attach to the LAN/WLAN. The term 'supplicant' is also used interchangeably to refer to the software running on the client that provides credentials to the authenticator. The <strong>authenticator</strong> is a network device which provides a data link between the client and the network and can allow or block network traffic between the two, such as an Ethernet switch or wireless access point; and the <strong>authentication server</strong> is typically a trusted server that can receive and respond to requests for network access, and can tell the authenticator if the connection is to be allowed, and various settings that should apply to that client's connection or setting. Authentication servers typically run software supporting the [[Remote Authentication Dial-In User Service (RADIUS)|RADIUS]] and [[Extensible Authentication Protocol (EAP)|EAP]] protocols. In some cases, the authentication server software may be running on the authenticator hardware.

The authenticator acts like a security guard to a protected network. The supplicant (i.e. client device) is not allowed access through the authenticator to the protected side of the network until the supplicant's identity has been validated and authorized. With 802.1X port-based authentication, the supplicant must initially provide the required credentials to the authenticator - these will have been specified in advance by the network administrator, and could include a user name/password or a permitted digital certificate. The authenticator forwards these credentials to the authentication server to decide whether access is to be granted. If the authentication server determines the credentials are valid, it informs the authenticator, which in turn allows the supplicant (client device) to access resources located on the protected side of the network.
# Protocol Operation

EAPOL operates over the [[2 - Data Link Layer|data link layer]], and in [Ethernet II framing](https://en.wikipedia.org/wiki/Ethernet_II_framing) protocol has an [EtherType](https://en.wikipedia.org/wiki/EtherType) value of 0x888E.
### Port Entities

802.1X-2001 defines two logical port entities for an authenticated port—the "controlled port" and the "uncontrolled port". The controlled port is manipulated by the 802.1X PAE (Port Access Entity) to allow (in the authorized state) or prevent (in the unauthorized state) network traffic ingress and egress to/from the controlled port. The uncontrolled port is used by the 802.1X PAE to transmit and receive EAPOL frames.

802.1X-2004 defines the equivalent port entities for the supplicant; so a supplicant implementing 802.1X-2004 may prevent higher level protocols being used if it is not content that authentication has successfully completed. This is particularly useful when an EAP method providing [[Authentication Protocols - Mutual／2-Way|mutual authentication]] is used, as the supplicant can prevent data leakage when connected to an unauthorized network.
### Typical authentication progression

![[802.1X - EAPOL/sequence-diagram-of-the-802.1X-progression.png|400]]

The typical authentication procedure consists of:
1. <strong>Initialization</strong> On detection of a new supplicant, the port on the switch (authenticator) is enabled and set to the "unauthorized" state. In this state, only 802.1X traffic is allowed; other traffic, such as the [[Internet Protocol (IP)|Internet Protocol]] (and with that [[Transmission Control Protocol (TCP)|TCP]] and [[Universal／User Datagram Protocol (UDP)|UDP]]), is dropped.
2. <strong>Initiation</strong> To initiate authentication the authenticator will periodically transmit EAP-Request Identity frames to a special Layer 2 address (01:80:C2:00:00:03) on the local network segment. The supplicant listens on this address, and on receipt of the EAP-Request Identity frame it responds with an EAP-Response Identity frame containing an identifier for the supplicant such as a User ID. The authenticator then encapsulates this Identity response in a RADIUS Access-Request packet and forwards it on to the authentication server. The supplicant may also initiate or restart authentication by sending an EAPOL-Start frame to the authenticator, which will then reply with an EAP-Request Identity frame.
3. <strong>Negotiation</strong><em>(Technically EAP negotiation)</em> The authentication server sends a reply (encapsulated in a RADIUS Access-Challenge packet) to the authenticator, containing an EAP Request specifying the EAP Method (The type of EAP based authentication it wishes the supplicant to perform). The authenticator encapsulates the EAP Request in an EAPOL frame and transmits it to the supplicant. At this point the supplicant can start using the requested EAP Method, or do an NAK ("Negative Acknowledgement") and respond with the EAP Methods it is willing to perform.
4. <strong>Authentication</strong> If the authentication server and supplicant agree on an EAP Method, EAP Requests and Responses are sent between the supplicant and the authentication server (translated by the authenticator) until the authentication server responds with either an EAP-Success message (encapsulated in a RADIUS Access-Accept packet), or an EAP-Failure message (encapsulated in a RADIUS Access-Reject packet). If authentication is successful, the authenticator sets the port to the "authorized" state and normal traffic is allowed, if it is unsuccessful the port remains in the "unauthorized" state. When the supplicant logs off, it sends an EAPOL-logoff message to the authenticator, the authenticator then sets the port to the "unauthorized" state, once again blocking all non-EAP traffic.
