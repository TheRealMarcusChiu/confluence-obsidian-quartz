---
title: "／etc／sudoers - visudo"
created: 2020-06-25T21:55:38.050-05:00
modified: 2020-06-25T21:58:00.274-05:00
parent: "[[Sudo Users]]"
children: []
---
the Sudoers File
### Modifying /etc/sudoers file

to modify the /etc/sudoers file:
```
visudo
```

after modification, update sudo service
```
sudo service sudo restart
```

changing visudo's text-editor of choice
```
sudo update-alternatives --config editor
```
