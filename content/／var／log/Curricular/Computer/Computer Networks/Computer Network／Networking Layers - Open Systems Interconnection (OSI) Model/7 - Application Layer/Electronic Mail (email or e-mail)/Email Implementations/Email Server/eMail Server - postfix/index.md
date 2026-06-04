---
title: "eMail Server - postfix"
created: 2019-03-16T22:15:14.997-05:00
modified: 2026-05-24T17:31:05.541-05:00
parent: "[[Email Server]]"
children: []
---
Postfix is a popular open-source Mail Transfer Agent (MTA) that can be used to route and deliver email on a Linux system. It is estimated that around 25% of public mail servers on the internet run Postfix.
# Installation

> [!expand]- apt-get
> [https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-on-ubuntu-16-04)
>
> <strong>1. update your local apt package cache</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get update</code></span>
>
> <strong>2. install postfix, passing in the DEBIAN\_PRIORITY=low environmental variable</strong>
> <span style="white-space: pre-wrap"><code>  sudo DEBIAN\_PRIORITY=low apt-get install postfix</code></span>
>
> then choose your configuration settings
>
> <strong>3. To view Postfix configuration values</strong>
> <span style="white-space: pre-wrap"><code>  postconf</code></span>
>
> <strong>OPTIONAL</strong>
>
> <strong>4. If you need to ever return to re-adjust these settings, you can do so by typing</strong>
> <span style="white-space: pre-wrap"><code>  sudo dpkg-reconfigure postfix</code></span>
>
> <strong>5. or manual way?</strong>
> <span style="white-space: pre-wrap"><code>  /etc/postfix/main.cf (and others) as needed</code><br><code>  After modifying main.cf, be sure to run '/etc/init.d/postfix reload'</code></span>

> [!expand]- macOS
> Mac’s already have postfix installed
# Configuration

> [!expand]- Click here to expand...
> <strong>1. If you need to ever return to re-adjust these settings, you can do so by typing:</strong>
> <span style="white-space: pre-wrap"><code>  sudo dpkg-reconfigure postfix</code></span>
>
> <strong>2. or manual way?</strong>
> <span style="white-space: pre-wrap"><code>  /etc/postfix/main.cf (and others) as needed</code><br><code>  After modifying main.cf, be sure to run '/etc/init.d/postfix reload'</code></span>
>
> <strong>3. To view Postfix configuration values</strong>
> <span style="white-space: pre-wrap"><code>  postconf</code></span>
# How to Install and Configure Postfix on Ubuntu 16.04

> [!expand]- Click here to expand...
> # <strong>Introduction</strong>
>
> Postfix is a popular open-source Mail Transfer Agent (MTA) that can be used to route and deliver email on a Linux system. It is estimated that around 25% of public mail servers on the internet run Postfix.
>
> In this guide, we'll teach you how to get up and running quickly with Postfix on an Ubuntu 16.04 server.
>
> <strong>Prerequisites</strong>
>
> In order to follow this guide, you should have access to a non-root user with sudo privileges. You can follow our Ubuntu 16.04 initial server setup guide to create the necessary user.
>
> In order to properly configure Postfix, you will need a Fully Qualified Domain Name pointed at your Ubuntu 16.04 server. You can find help on setting up your domain name with DigitalOcean by following this guide. If you plan on accepting mail, you will need to make sure you have an MX record pointing to your mail server as well.
>
> For the purposes of this tutorial, we will assume that you are configuring a host that has the FQDN of [mail.example.com](http://mail.example.com/).
> # Step 1: Install Postfix
>
> > [!expand]- Click here to expand...
> > Postfix is included in Ubuntu's default repositories, so installation is incredibly simple.
> >
> > To begin, update your local apt package cache and then install the software. We will be passing in the DEBIAN\_PRIORITY=low environmental variable into our installation command in order to answer some additional prompts:
> > - sudo apt-get update
> > - sudo DEBIAN\_PRIORITY=low apt-get install postfix
> >
> > Use the following information to fill in your prompts correctly for your environment:
> > - General type of mail configuration?: For this, we will choose Internet Site since this matches our infrastructure needs.
> > - System mail name: This is the base domain used to construct a valid email address when only the account portion of the address is given. For instance, the hostname of our server is [mail.example.com](http://mail.example.com/), but we probably want to set the system mail name to [example.com](http://example.com/) so that given the username user1, Postfix will use the address [user1@example.com](mailto:user1@example.com).
> > - Root and postmaster mail recipient: This is the Linux account that will be forwarded mail addressed to root@ and postmaster@. Use your primary account for this. In our case, sammy.
> > - Other destinations to accept mail for: This defines the mail destinations that this Postfix instance will accept. If you need to add any other domains that this server will be responsible for receiving, add those here, otherwise, the default should work fine.
> > - Force synchronous updates on mail queue?: Since you are likely using a journaled filesystem, accept No here.
> > - Local networks: This is a list of the networks that your mail server is configured to relay messages for. The default should work for most scenarios. If you choose to modify it, make sure to be very restrictive in regards to the network range.
> > - Mailbox size limit: This can be used to limit the size of messages. Setting it to "0" disables any size restriction.
> > - Local address extension character: This is the character that can be used to separate the regular portion of the address from an extension (used to create dynamic aliases).
> > - Internet protocols to use: Choose whether to restrict the IP version that Postfix supports. We'll pick "all" for our purposes.
> >
> > To be explicit, these are the settings we'll use for this guide:
> > - General type of mail configuration?: Internet Site
> > - System mail name: [example.com](http://example.com/) (not [mail.example.com](http://mail.example.com/))
> > - Root and postmaster mail recipient: sammy
> > - Other destinations to accept mail for: \$myhostname, [example.com](http://example.com/), [mail.example.com](http://mail.example.com/), [localhost.example.com](http://localhost.example.com/), localhost
> > - Force synchronous updates on mail queue?: No
> > - Local networks: 127.0.0.0/8 \[::ffff:127.0.0.0\]/104 \[::1\]/128
> > - Mailbox size limit: 0
> > - Local address extension character: +
> > - Internet protocols to use: all
> >
> > If you need to ever return to re-adjust these settings, you can do so by typing:
> > - sudo dpkg-reconfigure postfix
> >
> > The prompts will be pre-populated with your previous responses.
> >
> > When you are finished, we can now do a bit more configuration to set up our system how we'd like it.
> # Step 2: Tweak the Postfix Configuration
>
> > [!expand]- Click here to expand...
> > Next, we can adjust some settings that the package did not prompt us for.
> >
> > To begin, we can set the mailbox. We will use the Maildir format, which separates messages into individual files that are then moved between directories based on user action. The other option is the mbox format (which we won't cover here) which stores all messages within a single file.
> >
> > We will set the home\_mailbox variable to Maildir/ which will create a directory structure under that name within the user's home directory. The postconf command can be used to query or set configuration settings. Configure home\_mailbox by typing:
> > - sudo postconf -e 'home\_mailbox= Maildir/'
> >
> > Next, we can set the location of the virtual\_alias\_maps table. This table maps arbitrary email accounts to Linux system accounts. We will create this table at /etc/postfix/virtual. Again, we can use the postconf command:
> > - sudo postconf -e 'virtual\_alias\_maps= [hash:/etc/postfix/virtual](http://hash/etc/postfix/virtual)'
> # Step 3: Map Mail Addresses to Linux Accounts
>
> > [!expand]- Click here to expand...
> > Next, we can set up the virtual maps file. Open the file in your text editor:
> > - sudo nano /etc/postfix/virtual
> >
> > The virtual alias map table uses a very simple format. On the left, you can list any addresses that you wish to accept email for. Afterwards, separated by whitespace, enter the Linux user you'd like that mail delivered to.
> >
> > For example, if you would like to accept email at [contact@example.com](mailto:contact@example.com) and [admin@example.com](mailto:admin@example.com) and would like to have those emails delivered to the sammy Linux user, you could set up your file like this:
> > <span style="white-space: pre-wrap"><code>/etc/postfix/virtual</code><br><code>contact@example.com sammy</code><br><code>admin@example.com sammy</code></span>
> >
> > After you've mapped all of the addresses to the appropriate server accounts, save and close the file.
> >
> > We can apply the mapping by typing:
> > - sudo postmap /etc/postfix/virtual
> >
> > Restart the Postfix process to be sure that all of our changes have been applied:
> > - sudo systemctl restart postfix
> # Step 4: Adjust the Firewall
>
> > [!expand]- Click here to expand...
> > If you are running the UFW firewall, as configured in the initial server setup guide, we'll have to allow an exception for Postfix.
> >
> > You can allow connections to the service by typing:
> > - sudo ufw allow Postfix
> >
> > The Postfix server component is installed and ready. Next, we will set up a client that can handle the mail that Postfix will process.
> # Step 5: Setting up the Environment to Match the Mail Location
>
> > [!expand]- Click here to expand...
> > Before we install a client, we should make sure our MAIL environmental variable is set correctly. The client will inspect this variable to figure out where to look for user's mail.
> >
> > In order for the variable to be set regardless of how you access your account (through ssh, su, su -, sudo, etc.) we need to set the variable in a few different locations. We'll add it to /etc/bash.bashrcand a file within /etc/profile.d to make sure each user has this configured.
> >
> > To add the variable to these files, type:
> > - echo 'export MAIL=\~/Maildir' | sudo tee -a /etc/bash.bashrc | sudo tee -a /etc/profile.d/mail.sh
> >
> > To read the variable into your current session, you can source the /etc/profile.d/mail.sh file:
> > - source /etc/profile.d/mail.sh
> # Step 6: Install and Configure the Mail Client
>
> > [!expand]- Click here to expand...
> > In order to interact with the mail being delivered, we will install the s-nail package. This is a variant of the BSD xmail client, which is feature-rich, can handle the Maildir format correctly, and is mostly backwards compatible. The GNU version of mail has some frustrating limitations, such as always saving read mail to the mbox format regardless of the source format.
> >
> > To install the s-nail package, type:
> > - sudo apt-get install s-nail
> >
> > We should adjust a few settings. Open the /etc/s-nail.rc file in your editor:
> > - sudo nano /etc/s-nail.rc
> >
> > Towards the bottom of the file, add the following options:
> > <span style="white-space: pre-wrap"><code>/etc/s-nail.rc</code><br><code>. . .</code><br><code>set emptystart</code><br><code>set folder=Maildir</code></span>
> >
> > set record=+sent
> >
> > This will allow the client to open even with an empty inbox. It will also set the Maildir directory to the internal folder variable and then use this to create a sent mbox file within that, for storing sent mail.
> >
> > Save and close the file when you are finished.
> # Step 7: Initialize the Maildir and Test the Client
>
> > [!expand]- Click here to expand...
> > Now, we can test the client out.
> >
> > <strong>Initializing the Directory Structure</strong>
> >
> > The easiest way to create the Maildir structure within our home directory is to send ourselves an email. We can do this with the mail command. Because the sent file will only be available once the Maildir is created, we should disable writing to that for our initial email. We can do this by passing the -Snorecordoption.
> >
> > Send the email by piping a string to the mail command. Adjust the command to mark your Linux user as the recipient:
> > - echo 'init' | mail -s 'init' -Snorecord sammy
> >
> > You should get the following response:
> > <span style="white-space: pre-wrap"><code>Output</code><br><code>Can't canonicalize "/home/sammy/Maildir"</code></span>
> >
> > This is normal and will only show during this first message. We can check to make sure the directory was created by looking for our \~/Maildir directory:
> > - ls -R \~/Maildir
> >
> > You should see the directory structure has been created and that a new message file is in the \~/Maildir/new directory:
> > <span style="white-space: pre-wrap"><code>Output</code><br><code>/home/sammy/Maildir/:</code><br><code>cur  new  tmp</code><br><code></code><br><code>/home/sammy/Maildir/cur:</code><br><code></code><br><code>/home/sammy/Maildir/new:</code><br><code>[1463177269.Vfd01I40e4dM691221.mail.example.com](http://1463177269.vfd01i40e4dm691221.mail.example.com/)</code><br><code></code><br><code>/home/sammy/Maildir/tmp:</code></span>
> >
> > It looks like our mail has been delivered.
> >
> > <strong>Managing Mail with the Client</strong>
> >
> > Use the client to check your mail:
> > - mail
> >
> > You should see your new message waiting: Output s-nail version v14.8.6. Type ? for help. "/home/sammy/Maildir": 1 message 1 new \>N 1 [sammy@example.com](mailto:sammy@example.com) Wed Dec 31 19:00 14/369 init
> >
> > Just hitting ENTER should display your message:
> > <span style="white-space: pre-wrap"><code>Output</code><br><code>\[-- Message  1 -- 14 lines, 369 bytes --\]:</code><br><code>From sammy@example.com Wed Dec 31 19:00:00 1969</code><br><code>Date: Fri, 13 May 2016 18:07:49 -0400</code><br><code>To: sammy@example.com</code><br><code>Subject: init</code><br><code>Message-Id: \<20160513220749.A278F228D9@mail.example.com\></code><br><code>From: sammy@example.com</code><br><code></code><br><code>init</code></span>
> >
> > You can get back to your message list by typing h:
> > - h
> > Output s-nail version v14.8.6. Type ? for help. "/home/sammy/Maildir": 1 message 1 new
> >
> > > R 1 [sammy@example.com](mailto:sammy@example.com) Wed Dec 31 19:00 14/369 init
> >
> > Since this message isn't very useful, we can delete it with d:
> > - d
> >
> > Quit to get back to the terminal by typing q:
> > - q
> >
> > <strong>Sending Mail with the Client</strong>
> >
> > You can test sending mail by typing a message in a text editor:
> > - nano \~/test\_message
> >
> > Inside, enter some text you'd like to email:
> > <span style="white-space: pre-wrap"><code>\~/test\_message</code><br><code>Hello,</code><br><code></code><br><code>This is a test.  Please confirm receipt!</code></span>
> >
> > Using the cat command, we can pipe the message to the mail process. This will send the message as your Linux user by default. You can adjust the "From" field with the -r flag if you want to modify that value to something else:
> > - cat \~/test\_message | mail -s 'Test email subject line' -r from\_field\_account [user@email.com](mailto:user@email.com)
> >
> > The options above are:
> > - -s: The subject line of the email
> > - -r: An optional change to the "From:" field of the email. By default, the Linux user you are logged in as will be used to populate this field. The -r option allows you to override this.
> > - [user@email.com](mailto:user@email.com): The account to send the email to. Change this to be a valid account you have access to.
> >
> > You can view your sent messages within your mail client. Start the interactive client again by typing:
> > - mail
> >
> > Afterwards, view your sent messages by typing:
> > - file +sent
> >
> > You can manage sent mail using the same commands you use for incoming mail.
> # Conclusion
>
> You should now have Postfix configured on your Ubuntu 16.04 server. Managing email servers can be a tough task for beginning administrators, but with this configuration, you should have basic MTA email functionality to get you started.
