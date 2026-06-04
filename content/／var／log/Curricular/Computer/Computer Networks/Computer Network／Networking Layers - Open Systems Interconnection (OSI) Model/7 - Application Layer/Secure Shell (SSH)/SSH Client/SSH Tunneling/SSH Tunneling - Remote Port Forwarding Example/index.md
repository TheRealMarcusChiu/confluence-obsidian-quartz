---
title: "SSH Tunneling - Remote Port Forwarding Example"
created: 2019-03-16T22:28:42.777-05:00
modified: 2019-03-16T22:29:19.029-05:00
parent: "[[SSH Tunneling]]"
children: []
---
port from remote machine to local machine

<strong>1. execute tunneling command on local machine</strong>
<span style="white-space: pre-wrap"><code>  ssh -nNT -R8081:localhost:8080 [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/)</code></span>

this will pipe everything from [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/):8081 to your local machine’s port 8080.

<strong>2. Test the tunneling</strong>
- Open a new terminal and execute
  
  <span style="white-space: pre-wrap"><code>nc -l 8080</code></span>
  
  this command will listen on port 8080
- Open a new terminal and execute
  
  <span style="white-space: pre-wrap"><code>ssh [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/)</code></span>
  
  then in your remote machine execute
  
  <span style="white-space: pre-wrap"><code>echo “Hello World” | nc localhost 8081</code></span>
  
  this will push “Hello World” into the localhost port 8081 which is your remote machine’s port 8081.
- go back to the terminal where you executed ‘nc -l 8080’
  
  you should see “Hello world”
