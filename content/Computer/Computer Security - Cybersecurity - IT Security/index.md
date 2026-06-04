---
title: "Computer Security - Cybersecurity - IT Security"
created: 2019-11-09T20:27:31.698-06:00
modified: 2022-01-05T17:09:50.688-06:00
parent: "[[Computer]]"
children:
  - "[[Cross-Site Request Forging (CSRF)]]"
  - "[[Intrusion Detection／Prevention Systems (IDS - IPS)]]"
---
<strong>Computer Security</strong>, <strong>Cybersecurity</strong> or <strong>IT Security</strong> is the protection of computer systems from the theft of or damage to their hardware, software, or data, as well as from the disruption or misdirection of the services they provide
# Security Vulnerabilities
- <strong>Malicious Code:</strong>
	- <strong>trojan horse</strong> - hidden instruction on a program
	- <strong>virus</strong> - hidden instructions added on a program afterward
	- <strong>worm</strong> - a program that replaces itself by installing its copies
	- <strong>trapdoor</strong> - undocumented entry point to a system
	- <strong>logic bomb</strong> - instructions triggered by an event
	- <strong>zombie</strong> - malicious instructions remotely triggered over network
- <strong>Message Vulnerabilities:</strong>
	- <strong>fabricate messages</strong> - creating fake messages
	- <strong>intercept messages</strong> - redirecting or obstructing message flow
	- <strong>modify a message</strong> - modifying a message in transit
	- <strong>eavesdropping/record messages</strong> (passive) - listening to messages in transit
	- <strong>replay recorded messages</strong> - replaying recorded messages
- <strong>[[Authentication (AuthN)]] Vulnerabilities:</strong>
  ![[Authentication Attacks#^excerpt]]
- <strong>Availability Vulnerabilities ([[Denial of Service (DoS)|DoS]] attacks):</strong>
	- <strong>amplification attack</strong> - a method of the malicious user sending small queries that result in large responses to the target (e.g. DNS amplification attack)
- <strong>Web Application Vulnerabilities</strong>:
	- <strong>Injections</strong> - SQL injections
	- <strong>Cross-Site Scripting (XSS)</strong> - enables attackers to inject client-side scripts into web pages viewed by other users
		- <strong>Laced XSS</strong> - code hidden in URL and is executed when a victim clicks on it
		- <strong>Stored XSS</strong> - code stored into a database and is retrieved and executed on other users of web application
	- <strong>Cross-Site Request Forging (CSRF)</strong> - is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated

# Security Types
<strong>security</strong> - general term over other terms below. when asking, we need to state <em>"secure in terms of what"</em>. (e.g. secure in terms of confidentiality)
- <strong>confidentiality</strong> - ensures encoded messages cannot be decoded by unauthorized parties ([[Encryption|encryption]] enforces confidentiality)
	- <strong>PFS-Foliage </strong>- a stronger form of confidentiality where compromise of secret-keys (long-term) does not compromise session-keys (short-term) which encodes messages
		- <strong>perfect forward secrecy (PFS or forward secrecy) </strong>- is the impossibility for an eavesdropper to decrypt a conversation even if the eavesdropper records the entire conversation and later steals the party's long-term keys
		- <strong>escrow foliage</strong> - having prior knowledge of long-term keys, a passive eavesdropper cannot decrypt the conversation
- <strong>privacy</strong> - similar to confidentiality, but with only 1 authorized party having access (not 2 or more authorized parties)
- <strong>integrity/consistency</strong> - ensures message was not tampered ([[Hash-Based Message Authentication Code (HMAC)|HMAC]] & [[Digital Signatures]] enforces integrity)
- <strong>anonymity</strong> - the condition of being anonymous (origin of message/data is unknown)
	- <strong>endpoint identifier hiding</strong> - ability to hide the identities of the 2 communicating parties from eavesdroppers
- <strong>[[Authentication (AuthN)|authentication]]</strong> - authentication between 2 parties is the process of 1 party or both parties (sometimes parties outside communication between 2 parties) verifying the identity of another party
	- <strong>live partner reassurance</strong> - a stronger form of authentication that protects against replay of recorded messages (e.g. authentication messages, etc)
- <strong>[[Authorization (AuthZ)|authorization]]</strong> - the process of verifying what someone/something is allowed to do
- <strong>non-repudiation</strong> - is the assurance that we <strong>cannot</strong> deny <em>"that the party sent the message" </em>(opposite to plausible deniability)
	- non-repudiation is a stronger form of authentication where any party (not just parties within the communication group) can verify that the message originated from a stated identity
- <strong>plausible deniability</strong> - is the possibility that we <strong>can</strong> deny <em>"that the party sent the message"</em> (opposite to non-repudiation)
- <strong>availability</strong> - a quality of being able to be used or obtained
	- <strong>denial of service protection</strong> - methods that prevent [[Denial of Service (DoS)]] attacks (methods include: using cookies (not web cookies) or puzzles)
- <strong>signing/signature </strong>- provides both: integrity & authentication (esp. stronger form of authentication: non-repudiation)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
