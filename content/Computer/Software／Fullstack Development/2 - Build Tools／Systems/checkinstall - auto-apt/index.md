---
title: "checkinstall - auto-apt"
created: 2019-10-30T16:00:42.800-05:00
modified: 2019-12-31T18:06:04.872-06:00
parent: "[[2 - Build Tools／Systems]]"
children: []
---
[https://help.ubuntu.com/community/CheckInstall](https://help.ubuntu.com/community/CheckInstall)

<strong>CheckInstall</strong> is a [[make]] wrapper that keeps track of all files installed by a "make install" or equivalent, creates a ([[Slackware]], [[RPM Distro (Red Hat Package Manager)]], or [[Debian]]) [[UNIX - Package Managers (All)|package]] with those files, and adds it to the installed packages database, allowing for easy package removal or distribution
# Installation
```bash
sudo apt-get update && sudo apt-get install checkinstall
```
# Usage

Instead of
```bash
sudo make install
```

you will use
```bash
sudo checkinstall
```

When called with no arguments, checkinstall will call "make install". If you need other arguments, they can be supplied:
```bash
sudo checkinstall make install_package
```

removing installed package
```bash
sudo dpkg -r package-name
```
# Use CheckInstall with auto-apt

You can use auto-apt when you want to build a simple package from source with checkinstall. You need to have [auto-apt](https://help.ubuntu.com/community/AutoApt) installed!

Instead of
```bash
./configure
```

you use:
```bash
auto-apt run ./configure
```

If the dependencies are available, a dialog box opens and ask you to install them.

The rest remains the same
```bash
make
sudo checkinstall
```
