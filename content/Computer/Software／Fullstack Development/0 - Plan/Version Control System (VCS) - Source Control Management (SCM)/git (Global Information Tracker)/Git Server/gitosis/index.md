---
title: "gitosis"
created: 2019-03-16T00:22:43.658-05:00
modified: 2019-03-16T00:23:41.576-05:00
parent: "[[Git Server]]"
children: []
---
<font style="color: rgb(255,0,0);"><strong>NOT MAINTAINED ANYMORE</strong></font>

Keeping all users’ public keys in the authorized\_keys file for access works well only for a while. When you have hundreds of users, it’s much more of a pain to manage that process. You have to shell onto the server each time, and there is no access control — everyone in the file has read and write access to every project.

At this point, you may want to turn to a widely used software project called Gitosis. Gitosis is basically a set of scripts that help you manage the authorized\_keys file as well as implement some simple access controls. The really interesting part is that the UI for this tool for adding people and determining access isn’t a web interface but a special Git repository. You set up the information in that project; and when you push it, Gitosis reconfigures the server based on that, which is cool.
# Installation

> [!expand]- Click here to expand...
> <span style="white-space: pre-wrap"><code>apt-get install python-setuptools</code><br><code>git clone [https://github.com/tv42/gitosis.git](https://github.com/tv42/gitosis.git)</code><br><code>cd gitosis</code><br><code>sudo python setup.py install</code></span>
