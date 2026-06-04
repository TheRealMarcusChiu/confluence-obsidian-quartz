---
title: "Chef Server"
created: 2019-03-16T02:09:38.096-05:00
modified: 2019-03-16T02:11:15.868-05:00
parent: "[[Chef Server Family]]"
children: []
---
# Installation

> [!expand]- manual
> [https://docs.chef.io/install_server.html](https://docs.chef.io/install_server.html)
>
> <strong>1. Download the latest Chef server core [https://downloads.chef.io/](https://downloads.chef.io/)</strong>
> <span style="white-space: pre-wrap"><code>  wget [https://path/chef-servercore.deb](https://path/chef-servercore.deb)</code></span>
>
> <strong>2. Install Chef Server</strong>
> <span style="white-space: pre-wrap"><code>  sudo dpkg -i chef-server-core\_\*.deb</code></span>
>
> <strong>3. Remove the download file</strong>
> <span style="white-space: pre-wrap"><code>  rm chef-server-core\_\*.deb</code></span>
>
> <strong>3. The next step in the upgrade process is to run</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl upgrade</code></span>
>
> After the upgrade command completes, your Chef services will remain in a down state. To bring them back up run:
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl start</code></span>
>
> Then, to remove configuration files, logs, directories, users, etc. that were used by internal services that have been removed from this version of Chef Server, please run (Add the '--no-op' option to see what would be removed by this command):
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl cleanup</code></span>
>
> <strong>4. Run the chef-server-ctl command to start the Chef server services</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl reconfigure</code></span>
>
> <strong>5. If you want Web Manager go to \_setupFeature/ChefManage file to configure</strong>
>
> you may want to create user and organization before setting up Web Manager
> # Create User and Organization
>
> <strong>1. mkdir \~/.chef</strong>
>
> <strong>2. create admin user</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl user-create username firstname lastname email password --filename \~/.chef/username.pem</code></span>
>
> <strong>3. create organization</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl org-create shortname fullname --association\_user username --filename \~/.chef/shortname.pem</code></span>

> [!expand]- host it in cloud
> To have a trial ChefServer hosted online
> 1. go to [https://manage.chef.io/signup](https://manage.chef.io/signup) to signup
> 2. go to [https://api.chef.io/login](https://api.chef.io/login) to login
# Features

> [!expand]- Click here to expand...
> [https://docs.chef.io/install_server.html](https://docs.chef.io/install_server.html)
> # Chef Manage
>
> Web UI to configure Chef Server
> 1. sudo chef-server-ctl install chef-manage
> 2. sudo chef-server-ctl reconfigure
> 3. sudo chef-manage-ctl reconfigure
> 4. go to [https://localhost:80](https://localhost:80/)
>
> # Chef Push Jobs
> 1. sudo chef-server-ctl install opscode-push-jobs-server
> 2. sudo chef-server-ctl reconfigure
> 3. sudo opscode-push-jobs-server-ctl reconfigure
>
> # Chef Report
> 1. sudo chef-server-ctl install opscode-reporting
> 2. sudo chef-server-ctl reconfigure
> 3. sudo opscode-reporting-ctl reconfigure
# Commands

> [!expand]- Click here to expand...
> <strong>1. Run the chef-server-ctl command to start the Chef server services:</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl reconfigure</code><br><code></code><br><code>  sudo chef-server-ctl start</code><br><code>  sudo chef-server-ctl restart</code><br><code>  sudo chef-server-ctl stop</code><br><code>  sudo chef-server-ctl status</code></span>
>
> <strong>2. Remove the Chef server application, but without removing any of the data</strong>
> <span style="white-space: pre-wrap"><code>  chef-server-ctl uninstall</code></span>
>
> <strong>3. To revert the uninstall subcommand, run the reconfigure subcommand (because the start subcommand is disabled by the uninstall command).</strong>
> <span style="white-space: pre-wrap"><code>  sudo chef-server-ctl reconfigure</code></span>
