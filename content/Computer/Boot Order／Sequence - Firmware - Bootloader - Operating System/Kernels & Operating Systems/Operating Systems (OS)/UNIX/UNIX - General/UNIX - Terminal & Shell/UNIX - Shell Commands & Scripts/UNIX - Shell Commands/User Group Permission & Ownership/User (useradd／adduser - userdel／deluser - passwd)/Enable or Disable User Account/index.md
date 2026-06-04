---
title: "Enable or Disable User Account"
created: 2019-11-16T13:18:43.236-06:00
modified: 2019-11-16T13:18:59.682-06:00
parent: "[[User (useradd／adduser - userdel／deluser - passwd)]]"
children: []
---
# Expire Account

Let the account expire to <strong>disallowing a user from logging in from any source including ssh</strong>:
<span style="white-space: pre-wrap"><code>\# disallow peter from logging in</code><br><code>sudo usermod --expiredate 1 peter</code></span>

This is how you can reenable that account:
<span style="white-space: pre-wrap"><code>\# set expiration date of peter to Never</code><br><code>sudo usermod --expiredate "" peter</code></span>

# Lock a Password

To disable / lock the password of user account use below command. This will not disallow ssh-access on Ubuntu. This prepends a <code>!</code> to the password hash so that no password will match it anymore.
<span style="white-space: pre-wrap"><code>\# take away peters password</code><br><code>sudo passwd -l peter</code></span>

To unlock him:
<span style="white-space: pre-wrap"><code>\# give peter back his password</code><br><code>sudo passwd -u peter</code></span>

# Expire a Password

This command seems to differ across platforms. On Ubuntu, expiring a password will command the user to make up a new one once he logs in. This is not suitable for disabling an account.
<span style="white-space: pre-wrap"><code>\# make peter think of a new password on login</code><br><code>sudo passwd -e  YYYY-MM-DD peter</code></span>
