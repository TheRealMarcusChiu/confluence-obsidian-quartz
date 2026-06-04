---
title: "Bookstack"
created: 2025-06-01T17:46:24.924-05:00
modified: 2025-06-01T20:07:22.078-05:00
parent: "[[CMS - Servers]]"
children: []
---
###### Bookstack
````excerpt
- like an open-source version of [[Confluence]]
- it uses the ideas of books to organize pages and store information
- unfortunately [does not support multi sub level content](https://github.com/BookStackApp/BookStack/issues/95)
````
^excerpt

# Screenshot
![[Bookstack/bookstack.png|900]]
# Installation

based on: [https://www.bookstackapp.com/docs/admin/installation/](https://www.bookstackapp.com/docs/admin/installation/)

> [!expand-ui]- Ubuntu 24.04
> ```
> # Ensure you have read the above information about what this script does before executing these commands.
>
> # Download the script
> wget https://codeberg.org/bookstack/devops/raw/branch/main/scripts/installation-ubuntu-24.04.sh
>
> # Make it executable
> chmod a+x installation-ubuntu-24.04.sh
>
> # Run the script with admin permissions
> sudo ./installation-ubuntu-24.04.sh
> ```
>
> Installation output:
> ```
> This script installs a new BookStack instance on a fresh Ubuntu 24.04 server.
> This script does not ensure system security.
>
> This script logs full output to /home/marcuschiu/bookstack_install_1748817943.log which may help upon issues.
>
> Enter the domain (or IP if not using a domain) you want to host BookStack on and press [ENTER].
> Examples: my-site.com or docs.my-site.com or 192.168.111.21
> bookstack.lan
>
> Installing using the domain or IP "bookstack.lan"
>
> [1/9] Installing required system packages... (This may take several minutes)
> [2/9] Preparing MySQL database...
> [3/9] Downloading BookStack to /var/www/bookstack...
> [4/9] Installing Composer (PHP dependency manager)...
> [5/9] Installing PHP dependencies using composer...
> [6/9] Creating and populating BookStack .env file...
> [7/9] Running initial BookStack database migrations...
> [8/9] Setting BookStack file & folder permissions...
> [9/9] Configuring apache server...
> ----------------------------------------------------------------
> Setup finished, your BookStack instance should now be installed!
> - Default login email: admin@admin.com
> - Default login password: password
> - Access URL: http://192.168.111.21/ or http://bookstack.lan/
> - BookStack install path: /var/www/bookstack
> - Install script log: /home/marcuschiu/bookstack_install_1748817943.log
> ---------------------------------------------------------------
> ```
# Resources
- [https://www.bookstackapp.com/docs](https://www.bookstackapp.com/docs/admin/installation/)
