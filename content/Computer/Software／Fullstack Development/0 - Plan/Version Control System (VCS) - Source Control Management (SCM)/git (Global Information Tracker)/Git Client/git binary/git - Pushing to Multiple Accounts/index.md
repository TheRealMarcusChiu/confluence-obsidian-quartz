---
title: "git - Pushing to Multiple Accounts"
created: 2019-05-30T16:30:54.316-05:00
modified: 2019-05-30T16:31:23.718-05:00
parent: "[[git binary]]"
children: []
---
[https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574](https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574)

<strong>1. create a new SSH key</strong>
<span style="white-space: pre-wrap"><code>  ssh-keygen -t rss -C “your-email-address”</code></span>

save file as id\_rsa\_WHATEVER into \~/.ssh folder

<strong>2. attach the new key to GitHub account online</strong>
<span style="white-space: pre-wrap"><code>retrieve public key from \~/.ssh/id\_rsa\_WHATEVER.pub </code><br><code>paste it into github “ssh public keys” section</code></span>

<strong>3. tell ssh about the new key</strong>
<span style="white-space: pre-wrap"><code>  ssh-add \~/.ssh/id\_rsa\_WHATEVER</code></span>

if successful, response of “Identity Added”

<strong>4. Create a config file</strong>
<span style="white-space: pre-wrap"><code>  touch \~/.ssh/config</code><br><code>  vim config</code></span>

paste the following into file

```merge-table
{
  "rows": [
    [
      "<code>\\#Default GitHub</code>\n<code>Host [github.com](http://github.com)</code>\n<code>HostName [github.com](http://github.com)</code>\n<code>User git</code>\n<code>IdentityFile \\~/.ssh/id\\_rsa</code>\n<code>Host github-WHATEVER</code>\n<code>HostName [github.com](http://github.com)</code>\n<code>User git</code>\n<code>IdentityFile \\~/.ssh/id\\_rsa\\_WHATEVER</code>"
    ]
  ]
}
```

<strong>5. Try it out</strong>
<span style="white-space: pre-wrap"><code>  git init</code><br><code>  git commit -am “first commit”</code></span>

login to WHATEVER account, create a new repository named “hello”
<span style="white-space: pre-wrap"><code>  git remote add origin git@github-WHATEVER:GitHubUsername/hello.git</code><br><code>  git push origin master</code></span>
