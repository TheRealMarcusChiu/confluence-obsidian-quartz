---
title: "Let's Encrypt - certbot"
created: 2025-06-12T12:04:48.539-05:00
modified: 2025-06-12T12:35:03.166-05:00
parent: "[[Certbot]]"
children: []
---
# Install Dependencies
```
sudo yum install python3 python-devel augeas-devel gcc
```
# Set up a Python virtual environment
```
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
```
# Install Certbot
```
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
```
# Install DNS Plugin For [[AWS - Route53|AWS Route53]]
```
sudo /opt/certbot/bin/pip install certbot-dns-route53
```
# Use Certbot to Obtain Certificate
```
sudo certbot certonly --dns-route53 -d "marcuschiu.com" -d "*.marcuschiu.com"
```

> [!expand-ui]- Output
> ```
> /opt/certbot/lib64/python3.7/site-packages/OpenSSL/SSL.py:15: CryptographyDeprecationWarning: Python 3.7 is no longer supported by the Python core team and support for it is deprecated in cryptography. The next release of cryptography will remove support for Python 3.7.
>   from cryptography import x509
> Saving debug log to /var/log/letsencrypt/letsencrypt.log
> Python 3.7 support will be dropped in the next planned release of Certbot - please upgrade your Python version.
> /opt/certbot/lib64/python3.7/site-packages/boto3/compat.py:82: PythonDeprecationWarning: Boto3 will no longer support Python 3.7 starting December 13, 2023. To continue receiving service updates, bug fixes, and security updates please upgrade to Python 3.8 or later. More information can be found here: https://aws.amazon.com/blogs/developer/python-support-policy-updates-for-aws-sdks-and-tools/
>   warnings.warn(warning, PythonDeprecationWarning)
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> An RSA certificate named marcuschiu.com already exists. Do you want to update
> its key type to ECDSA?
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> (U)pdate key type/(K)eep existing key type: U
> Renewing an existing certificate for marcuschiu.com and *.marcuschiu.com
>
> Successfully received certificate.
> Certificate is saved at: /etc/letsencrypt/live/marcuschiu.com/fullchain.pem
> Key is saved at:         /etc/letsencrypt/live/marcuschiu.com/privkey.pem
> This certificate expires on 2025-09-10.
> These files will be updated when the certificate renews.
>
> NEXT STEPS:
> - The certificate will need to be renewed before it expires. Certbot can automatically renew the certificate in the background, but you may need to take steps to enable that functionality. See https://certbot.org/renewal-setup for instructions.
>
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> If you like Certbot, please consider supporting our work by:
>  * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
>  * Donating to EFF:                    https://eff.org/donate-le
> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
> ```
# Configure Nginx to Point to Issued Certificates
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
# Setup Auto Renewal Process
```
echo "0 0,12 * * * root /opt/certbot/bin/python -c 'import random; import time; time.sleep(random.random() * 3600)' && sudo certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```
# Monthly Upgrade
```
sudo /opt/certbot/bin/pip install --upgrade certbot certbot-nginx certbot-dns-route53
```
