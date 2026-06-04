---
title: "bind9 - Berkley Internet Naming Domain／Daemon (BIND)"
created: 2019-03-16T22:59:50.707-05:00
modified: 2022-11-07T03:19:27.462-06:00
parent: "[[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)]]"
children:
  - "[[bind9 - View／Flush／Reload Cache]]"
---
###### Berkley Internet Naming Domain/Daemon (BIND)
- is the most common program used for maintaining a [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|domain name server]] on [[Linux]]

# Installation

> [!expand]- Click here to expand...
> packages to install
> - bind9 - the DNS service
> - dnsutils - a set of tools such as dig which can be helpful for testing and troubleshooting.
> - bind9-doc - Local info pages with information about bind and its configuration options. This is optional but recommended.
>
> > [!expand]- apt-get
> > 1. <strong>install bind9</strong>
> > 	1. sudo apt-get install bind9 dnsutils bind9-doc
> > 2. <strong>path to bind configuration files</strong>
> > 	1. /etc/bind
> > 	2. /etc/bind9
>
> > [!expand]- yum
> > <strong>1. install bind9</strong>
> > <span style="white-space: pre-wrap"><code>  yum install bind9 dnsutils bind9-doc</code></span>
# Configuration

> [!expand]- Click here to expand...
> ### Modifying /etc/bind/named.conf.options
>
> > [!expand]- Click here to expand...
> > ```
> > # Access Control List that includes the loopback interface and the local network
> > # determines who is allowed to query this DNS
> > acl internals {
> > 	127.0.0.0/8;
> > 	192.168.86.0/24;
> > };
> >  
> > options {
> > 	directory "/var/cache/bind";
> > 	auth-nxdomain no;
> >
> > 	# Forward queries to ...
> > 	forwarders {
> > 		192.168.86.1; # Router DNS
> > 		# 1.1.1.1 # Cloudflare
> > 		# 8.8.8.8; # Google DNS
> > 	};
> >  
> > 	# Listen port 53 from loopback and our own IP Address
> > 	listen-on port 53 {
> > 		127.0.0.1;
> > 		192.168.86.218; // IP Address of this Bind9 Server
> > 	};
> >  
> > 	# listen IPv6 traffic
> > 	listen-on-v6 {
> > 		any;
> > 	};
> >  
> > 	# Allow queries from loopback and our internal network
> > 	allow-query {
> > 		internals;
> > 	};
> >  
> > 	# Do not transfer the zone information to the secondary DNS
> > 	allow-transfer {
> > 		none;
> > 	};
> >  
> > 	// Allow recursive queries to the local host
> > 	allow-recursion {
> > 		internals;
> > 	};
> > };
> > ```
> ### Adding Zones
>
> let's redirect confluence.marcuschiu.com to 192.168.86.217
>
> > [!expand]- Click here to expand...
> > create a file /etc/bind/confluence.marcuschiu.com
> > ```
> > ;
> > ; BIND data file for local loopback interface
> > ;
> > $TTL	604800
> > @	IN	SOA	confluence.marcuschiu.com. admin.confluence.marcuschiu.com. (
> > 			      6		; Serial
> > 			 604800		; Refresh
> > 			  86400		; Retry
> > 			2419200		; Expire
> > 			 604800 )	; Negative Cache TTL
> > ;
> > @	IN	NS	local.
> > @	IN	A	192.168.86.217
> > @	IN	AAAA	::1
> > ```
> >
> > open file: /etc/bind/named.conf.default-zones. and add the following lines
> > ```
> > ...
> >
> > zone "confluence.marcuschiu.com" {
> > 	type master;
> > 	file "/etc/bind/confluence.marcuschiu.com";
> > };
> > ```
> >
> > restart bind9 server
> > ### Test
> > ```
> > dig @BIND9-IP-ADDRESS confluence.marcuschiu.com +short
> > ```
>
> let's add {dns.local, vpn.local, proxy.local, etc}
>
> > [!expand]- Click here to expand...
> > ```
> > ;
> > ; BIND data file for local loopback interface
> > ;
> > $TTL	604800
> > @	IN	SOA	local. admin.local. (
> > 			      6		; Serial
> > 			 604800		; Refresh
> > 			  86400		; Retry
> > 			2419200		; Expire
> > 			 604800 )	; Negative Cache TTL
> > ;
> > @	IN	NS	local.
> > @	IN	A	127.0.0.1
> > @	IN	AAAA	::1
> > vpn IN A 192.168.86.221
> > dns IN A 192.168.86.218
> > proxy IN A 192.168.86.217
> > ubuntu-server IN A 192.168.86.28
> > ```
> >
> > open file: /etc/bind/named.conf.default-zones. and add the following lines
> > ```
> > ...
> >
> > zone "local" {
> > 	type master;
> > 	file "/etc/bind/local";
> > };
> > ```
> >
> > restart bind9 server
> > ### Test
> > ```
> > dig @BIND9-IP-ADDRESS dns.local +short
> > dig @BIND9-IP-ADDRESS vpn.local +short
> > dig @BIND9-IP-ADDRESS proxy.local +short
> > ...
> > ```
# Commands

> [!expand]- Click here to expand...
> <strong>Start Stop Restart (refer to [[Service／Daemon Manager - (SystemV - Upstart - Systemd - Launchd)|Service/Daemon Manager]] for various service commands)</strong>
> <span style="white-space: pre-wrap"><code>sudo service bind9 start</code><br><code>sudo service bind9 restart</code><br><code>sudo service bind9 stop</code><br><code>sudo service bind9 status</code><br><code></code><br><code>sudo /etc/init.d/bind9 start</code><br><code>sudo /etc/init.d/bind9 restart</code><br><code>sudo /etc/init.d/bind9 stop</code><br><code>sudo /etc/init.d/bind9 status</code><br><code></code><br><code>sudo systemctl start bind9</code><br><code>sudo systemctl restart bind9</code><br><code>sudo systemctl stop bind9</code><br><code>sudo systemctl status bind9</code></span>
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
