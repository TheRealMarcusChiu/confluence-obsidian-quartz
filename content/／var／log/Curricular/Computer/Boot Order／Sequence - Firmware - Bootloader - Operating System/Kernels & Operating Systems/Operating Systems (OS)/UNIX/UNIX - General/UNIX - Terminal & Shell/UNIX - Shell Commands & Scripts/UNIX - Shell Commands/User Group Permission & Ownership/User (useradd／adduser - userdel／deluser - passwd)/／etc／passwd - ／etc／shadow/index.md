---
title: "／etc／passwd - ／etc／shadow"
created: 2019-11-16T13:08:08.811-06:00
modified: 2020-06-25T22:05:35.101-05:00
parent: "[[User (useradd／adduser - userdel／deluser - passwd)]]"
children: []
---
- <strong>[[／etc directory|/etc]]/passwd</strong>
	- file that stores user account information
	- is world readable
- <strong>/etc/shadow</strong>
	- file that stores to encrypted password
	- only root account can read it

# <strong>/etc/passwd</strong>

the /etc/passwd file contains ':' delimitated entries/lines each containing the following information:
<span style="white-space: pre-wrap"><code>marcuschiu:x:1000:1000:marcuschiu,room-number,work-phone,home-phone,other:/home/marcuschiu:/bin/bash</code></span>

- username
- encrypted password (replaced with 'x' since encrypted passwords are stored in the /etc/shadow file
- user ID number (UID)
- user's group ID number (GID)
- GECOS field is a comma-delimited list with this order:
	1. user's full name (or application name, if the account is for a program)
	2. building and room number or contact person
	3. office telephone number
	4. home telephone number
	5. any other contact information (pager number, fax, external e-mail address, etc.)
- user home directory
- default login shell - for other ways to set it see [[／etc／passwd - ／etc／shadow]]

# <strong>/etc/shadow</strong>

the /etc/shadow file contains ':' delimitated entries/lines each containing the following information:
<span style="white-space: pre-wrap"><code>e:\$6\$zWJiqc5G\$MP7dTXaYfEcTFRXZUv.VypwS7tQVlihjQlDbDxpDideQ641PhM0E49hf5kxw33qCz6bCCIN4JHkyRcur/AEwX/:18216:0:99999:7:::</code></span>

1. <strong>Username</strong> : It is your login name.
2. <strong>Password</strong> : It is your encrypted password. The password should be minimum 8-12 characters long including special characters, digits, lower case alphabetic and more. Usually password format is set to \$id\$salt\$hashed, The \$id is the algorithm used On GNU/Linux as follows:
	1. \$1\$ is MD5
	2. \$2a\$ is Blowfish
	3. \$2y\$ is Blowfish
	4. \$5\$ is SHA-256
	5. \$6\$ is SHA-512
3. <strong>Last password change (lastchanged)</strong> : Days since Jan 1, 1970 that password was last changed
4. <strong>Minimum</strong> : The minimum number of days required between password changes i.e. the number of days left before the user is allowed to change his/her password
5. <strong>Maximum</strong> : The maximum number of days the password is valid (after that user is forced to change his/her password)
6. <strong>Warn</strong> : The number of days before password is to expire that user is warned that his/her password must be changed
7. <strong>Inactive</strong> : The number of days after password expires that account is disabled
8. <strong>Expire</strong> : days since Jan 1, 1970 that account is disabled i.e. an absolute date specifying when the login may no longer be used.
