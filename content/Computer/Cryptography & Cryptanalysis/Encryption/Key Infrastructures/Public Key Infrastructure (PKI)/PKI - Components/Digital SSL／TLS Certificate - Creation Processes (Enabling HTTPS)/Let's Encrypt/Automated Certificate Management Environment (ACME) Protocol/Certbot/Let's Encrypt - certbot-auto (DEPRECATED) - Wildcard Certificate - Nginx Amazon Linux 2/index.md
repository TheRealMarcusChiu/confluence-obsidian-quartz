---
title: "Let's Encrypt - certbot-auto (DEPRECATED) - Wildcard Certificate - Nginx Amazon Linux 2"
created: 2020-06-28T17:34:50.971-05:00
modified: 2025-06-12T12:10:29.076-05:00
parent: "[[Certbot]]"
children: []
---
Doing domain validation in this way is the only way to obtain wildcard certificates from Let’s Encrypt

install certbot-auto
```bash
curl -O https://dl.eff.org/certbot-auto
```

modify certbot-auto
```bash
# find the following line
elif [ -f /etc/redhat-release ]; then
# replace that line with the following line
elif [ -f /etc/redhat-release ] || grep 'cpe:.*:amazon_linux:2' /etc/os-release > /dev/null 2>&1; then
```

move certbot-auto
```
mv certbot-auto /usr/local/bin/certbot-auto
```

switch to root user (NOTE - keeps the \$PATH)
```
sudo su -
```

generate certificate for <font style="color: rgb(128,128,128);">"\*.marcuschiu.com"</font> and <font style="color: rgb(128,128,128);">"marcuschiu.com"</font>
```bash
certbot-auto certonly --manual --preferred-challenges=dns --email marcuschiu9@gmail.com --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d "*.marcuschiu.com" -d "marcuschiu.com" --debug
```

> [!expand]- example output
> ```text
> ... installing dependencies
>
> Saving debug log to /var/log/letsencrypt/letsencrypt.log
> Plugins selected: Authenticator manual, Installer None
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> Would you be willing to share your email address with the Electronic Frontier
> Foundation, a founding partner of the Let's Encrypt project and the non-profit
> organization that develops Certbot? We'd like to send you email about our work
> encrypting the web, EFF news, campaigns, and ways to support digital freedom.
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> (Y)es/(N)o: Y
> Obtaining a new certificate
> Performing the following challenges:
> dns-01 challenge for marcuschiu.com
> dns-01 challenge for marcuschiu.com
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> NOTE: The IP of this machine will be publicly logged as having requested this
> certificate. If you're running certbot in manual mode on a machine that is not
> your server, please ensure you're okay with that.
>
> Are you OK with your IP being logged?
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> (Y)es/(N)o: Y
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> Please deploy a DNS TXT record under the name
> _acme-challenge.marcuschiu.com with the following value:
>
> sRPiL8X_c22jj8k6PsodZsL0W-fT-xUKDolvDHNXKfc
>
> Before continuing, verify the record is deployed.
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> Press Enter to Continue
> Waiting for verification...
> Cleaning up challenges
>
> IMPORTANT NOTES:
>  - Congratulations! Your certificate and chain have been saved at:
>    /etc/letsencrypt/live/marcuschiu.com/fullchain.pem
>    Your key file has been saved at:
>    /etc/letsencrypt/live/marcuschiu.com/privkey.pem
>    Your cert will expire on 2020-09-26. To obtain a new or tweaked
>    version of this certificate in the future, simply run certbot-auto
>    again. To non-interactively renew *all* of your certificates, run
>    "certbot-auto renew"
>  - If you like Certbot, please consider supporting our work by:
>
>    Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
>    Donating to EFF:                    https://eff.org/donate-le
> ```

once this process is finished we get 2 files:
- /etc/letsencrypt/live/marcuschiu.com/fullchain.pem
- /etc/letsencrypt/live/marcuschiu.com/privkey.pem

use this in Nginx like so below
```
ssl_certificate     /etc/letsencrypt/live/marcuschiu.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/marcuschiu.com/privkey.pem;

server {
	listen 443 ssl;
	server_name marcuschiu.com www.marcuschiu.com;
	...
}

server {
	listen 443 ssl;
	server_name confluence.marcuschiu.com;
    ...
}

# more https servers

# redirect http to https
server {
	listen 80 default_server;
	server_name _;
    return 301 https://$host$request_uri;
}
```
