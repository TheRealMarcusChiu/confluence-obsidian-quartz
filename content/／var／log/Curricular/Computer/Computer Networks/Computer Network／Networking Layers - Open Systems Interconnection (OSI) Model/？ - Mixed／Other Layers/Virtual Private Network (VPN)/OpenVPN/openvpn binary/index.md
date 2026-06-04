---
title: "openvpn binary"
created: 2019-03-16T23:17:25.058-05:00
modified: 2025-05-23T22:53:56.195-05:00
parent: "[[OpenVPN]]"
children: []
---
###### openvpn binary
````excerpt
- is used to setup an openvpn server and/or to connect as openvpn client
````
^excerpt

# Client
# Server
### Client Configuration

> [!expand]- Specify DNS server when connected to VPN
> Add the following into .ovpn client file
> ```
> dhcp-option DNS 192.168.86.1
> ```
>
> Example client config
> ```
> client
> dev tun
> route-nopull 
> route 192.168.86.0 255.255.255.0
> route 192.168.0.0 255.255.255.0
> proto udp
> remote 150.221.175.11 1194
> resolv-retry infinite
> nobind
> remote-cert-tls server
> tls-version-min 1.2
> verify-x509-name ubuntu-server-vpn_09846c25-9359-4cd6-83d2-3c102898ea36 name
> cipher AES-256-CBC
> auth SHA256
> auth-nocache
> verb 3
> dhcp-option DNS 192.168.86.1
> <ca>
> -----BEGIN CERTIFICATE-----
> MIIBvjCCAWWgAwIBAgIURdavgTB3CFtignOwD9wxgS2gmMEwCgYIKoZIzj0EAwIw
> .....
> ```
> # LINUX
>
> <strong>1. On Ubuntu 16.04 client you need add following directives to client.ovpn config file:</strong>
> <span style="white-space: pre-wrap"><code>  script-security 2                                                                                                       </code><br><code>  dhcp-option DNS 192.168.1.1                                                                                           </code><br><code>  dhcp-option DOMAIN example.lan                                                                                   </code></span>
>
> <strong>2. Only on ubuntu client, you also need following directives</strong>
> <span style="white-space: pre-wrap"><code>  up /etc/openvpn/update-resolv-conf                                                                                    </code><br><code>  down /etc/openvpn/update-resolv-conf</code></span>
>
> # WINDOWS
>
> <strong>1. On Windows 10 client you need add following directives to client.ovpn config file</strong>
> <span style="white-space: pre-wrap"><code>  script-security 2                                                                                                       </code><br><code>  dhcp-option DNS 192.168.1.1                                                                                           </code><br><code>  dhcp-option DOMAIN example.lan</code></span>
>
> No more directives is required for windows. Latest openvpn client versions for windows does not recognize option DOMAIN-SEARCH correctly, and works with option DOMAIN.

> [!expand]- Force all traffic to go through VPN
> Add the following into .ovpn client file
> ```
> redirect-gateway def1
> ```

> [!expand]- split tunneling
> Add the following into .ovpn client file
> ```
> route-nopull
> route 192.168.86.0 255.255.255.0
> ```
> - this would route [[IPv4 - Address|ip addresses]] 192.168.86.0/24 through the VPN gateway
> - any other address would go through normal default gateway
### Commands

> [!expand]- Click here to expand...
> <strong>0. select/locate \*.ovpn client file</strong>
>
> <strong>1. connect to the OpenVPN server</strong>
> <span style="white-space: pre-wrap"><code>  sudo openvpn --config \<\*.ovpn client file\></code></span>
>
> <strong>2. Enter Auth Username:</strong>
> <span style="white-space: pre-wrap"><code>  Enter Auth Password: \<type password\></code></span>
>
> <strong>3. Wait until you see</strong>
> <span style="white-space: pre-wrap"><code>  Initialization Sequence Completed</code></span>
### Server Setup

> [!expand]- Click here to expand...
> How to setup OpenVPN
>
> [https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-16-04)
> ```
> dev tun
> proto udp
> port 1194
> ca /etc/openvpn/easy-rsa/pki/ca.crt
> cert /etc/openvpn/easy-rsa/pki/issued/ubuntu-server-vpn_09846c25-9359-4cd6-83d2-3c102898ea36.crt
> key /etc/openvpn/easy-rsa/pki/private/ubuntu-server-vpn_09846c25-9359-4cd6-83d2-3c102898ea36.key
> dh none
> ecdh-curve prime256v1
> topology subnet
> server 10.123.79.0 255.255.255.0
> # Set your primary domain name server address for clients
> push "dhcp-option DNS 192.168.86.1"
> #push "dhcp-option DNS 1.1.1.1"
> # Prevent DNS leaks on Windows
> push "block-outside-dns"
> # Override the Client default gateway by using 0.0.0.0/1 and
> # 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of
> # overriding but not wiping out the original default gateway.
> push "redirect-gateway def1"
> client-to-client
> client-config-dir /etc/openvpn/ccd
> keepalive 15 120
> remote-cert-tls client
> tls-version-min 1.2
>  tls-crypt /etc/openvpn/easy-rsa/pki/ta.key
> cipher AES-256-CBC
> auth SHA256
> user openvpn
> group openvpn
> persist-key
> persist-tun
> crl-verify /etc/openvpn/crl.pem
> status /var/log/openvpn-status.log 20
> status-version 3
> syslog
> verb 3
> #DuplicateCNs allow access control on a less-granular, per user basis.
> #Remove # if you will manage access by user instead of device.
> #duplicate-cn
> # Generated for use by PiVPN.io
> ```
### Commands

> [!expand]- homebrew
> <strong>1. to have launchd start openvpn now and restart at startup</strong>
> <span style="white-space: pre-wrap"><code>  sudo brew services start openvpn</code><br><code>  sudo brew services restart openvpn</code><br><code>  sudo brew services stop openvpn</code></span>

> [!expand]- apt
> <strong>1. to have systemd start openvpn now and restart at startup</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl start openvpn@server</code><br><code>  sudo systemctl stop openvpn@server</code><br><code>  sudo systemctl restart openvpn@server</code></span>
>
> @server means it will run the /etc/openvpn/server.conf
>
> if @jesus2 means it will run the /etc/openvpn/jesus2.conf
>
> <strong>2. get status of server</strong>
> <span style="white-space: pre-wrap"><code>  sudo systemctl status openvpn@server</code></span>
