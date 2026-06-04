---
title: "SSH Tunneling - Local Port Forwarding Example"
created: 2019-03-16T22:28:03.019-05:00
modified: 2019-03-16T22:28:37.376-05:00
parent: "[[SSH Tunneling]]"
children: []
---
port from local machine to remote machine

<strong>1. execute tunneling command on local machine</strong>
<span style="white-space: pre-wrap"><code>  ssh -nNT -L8081:marcuschiu-php56.cloudatron.com:8080 localhost</code></span>

this will pipe everything from localhost:8081 (your local machine’s port 8081) to [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/):8080 (the remote machine’s port 8080).

<strong>2. Test the tunneling</strong>
- Open a new terminal and execute
  
  <span style="white-space: pre-wrap"><code>ssh [marcuschiu-php56.cloudatron.com](http://marcuschiu-php56.cloudatron.com/)</code></span>
  
  then in your remote machine execute
  
  <span style="white-space: pre-wrap"><code>nc -l 8080</code></span>
  
  this command will have remote machine listen on port 8080
- Open a new terminal and execute
  
  <span style="white-space: pre-wrap"><code>echo “Hello World” | nc localhost 8081</code></span>
  
  this will push “Hello World” into the localhost port 8081 which is your LOCAL machine’s port 8081.
- go back to the terminal where you executed ‘nc -l 8080’
  
  you should see “Hello world”
