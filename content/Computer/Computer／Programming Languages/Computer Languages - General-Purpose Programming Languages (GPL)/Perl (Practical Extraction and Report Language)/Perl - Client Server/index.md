---
title: "Perl - Client Server"
created: 2019-03-15T16:29:04.417-05:00
modified: 2019-03-15T16:30:49.997-05:00
parent: "[[Perl (Practical Extraction and Report Language)]]"
children: []
---
<strong>1. To run the server issue the following command on Unix prompt</strong>
<span style="white-space: pre-wrap"><code>  perl sever.pl</code></span>

```perl
#!/usr/bin/perl -w
# Filename : server.pl
 
use strict;
use Socket;
 
# use port 7890 as default
my $port = shift || 7890;
my $proto = getprotobyname('tcp');
my $server = "localhost";  # Host IP running the server
 
# create a socket, make it reusable
socket(SOCKET, PF_INET, SOCK_STREAM, $proto)
or die "Can't open socket $!\n";
setsockopt(SOCKET, SOL_SOCKET, SO_REUSEADDR, 1)
or die "Can't set socket option to SO_REUSEADDR $!\n";
 
# bind to a port, then listen
bind( SOCKET, pack_sockaddr_in($port, inet_aton($server)))
or die "Can't bind to port $port! \n";
 
listen(SOCKET, 5) or die "listen: $!";
print "SERVER started on port $port\n";
 
# accepting a connection
my $client_addr;
while ($client_addr = accept(NEW_SOCKET, SOCKET)) {
    # send them a message, close connection
    my $name = gethostbyaddr($client_addr, AF_INET);
    print NEW_SOCKET "Smile from the server";
    print "Connection received from $client_addr $name\n";
    close NEW_SOCKET;
}

```

<strong>2. Now let's start our client at the command prompt, which will connect to the server and read message sent by the server and displays the same on the screen as follows</strong>
<span style="white-space: pre-wrap"><code>  perl client.pl</code></span>

```perl
#!/usr/bin/perl -w
# Filename : client.pl
 
use strict;
use Socket;
 
# initialize host and port
my $host = shift || 'localhost';
my $port = shift || 7890;
my $server = "localhost";  # Host IP running the server
 
# create the socket, connect to the port
socket(SOCKET,PF_INET,SOCK_STREAM,(getprotobyname('tcp'))[2])
or die "Can't create a socket $!\n";
connect( SOCKET, pack_sockaddr_in($port, inet_aton($server)))
or die "Can't connect to port $port! \n";
 
my $line;
while ($line = ) {
    print "$line\n";
}
close SOCKET or die "close: $!";
```
