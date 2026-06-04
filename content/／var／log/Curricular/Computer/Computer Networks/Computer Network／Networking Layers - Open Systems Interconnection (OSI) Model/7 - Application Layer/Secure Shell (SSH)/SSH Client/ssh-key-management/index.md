---
title: "ssh-key-management"
created: 2019-03-16T22:30:33.918-05:00
modified: 2019-03-16T22:30:49.485-05:00
parent: "[[SSH Client]]"
children: []
---
In Mac OS X, GitBash, and Linux you can use the three ssh- commands to create and manage your identities.
<span style="white-space: pre-wrap"><code>ssh-keygen    Creates key pairs.</code><br><code>ssh-agent    Agent for providing keys to remote servers. The agent holds loaded keys in memory.</code><br><code>ssh-add     adds private key identities to the authentication agent</code></span>

<strong>1. Adding your SSH Keys to an SSH Agent to Avoid Typing the Passphrase</strong>
<span style="white-space: pre-wrap"><code>  eval \$(ssh-agent)</code><br><code>  ssh-add \<private-key-file\></code></span>

# ssh-add

TODO
# ssh-agent

<strong>1. Start the ssh-agent in the background</strong>
<span style="white-space: pre-wrap"><code>  eval "\$(ssh-agent -s)"</code></span>

# ssh-keygen

[https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)

<strong>1. generate an ssh key pair</strong>
<span style="white-space: pre-wrap"><code>  ssh-keygen</code></span>

<strong>2. generate an ssh key pair with larger number of bits</strong>
<span style="white-space: pre-wrap"><code>  ssh keys are 2048 bits by default</code><br><code>  ssh-keygen -b 4096</code></span>

<strong>3. removing or changing passphrase on private key</strong>
<span style="white-space: pre-wrap"><code>  ssh-keygen -p</code></span>

<strong>4. displaying the ssh key fingerprint</strong>
<span style="white-space: pre-wrap"><code>  ssh-keygen -l</code></span>
