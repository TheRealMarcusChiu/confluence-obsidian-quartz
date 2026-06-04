---
title: "pacman binary"
created: 2019-03-15T02:37:19.110-05:00
modified: 2026-05-21T18:01:21.043-05:00
parent: "[[Pacman Package Managers]]"
children: []
---
###### pacman binary
````excerpt
- is one of the major distinguishing features of [[Arch Linux]]
- it combines a simple binary package format with an easy-to-use build system
- the goal of pacman is to make it possible to easily manage packages, whether they are from the official repositories or the user's own builds
- installed with ArchLinux
````
^excerpt

# Other

> [!expand]- configurations
> [https://www.digitalocean.com/community/tutorials/how-to-use-arch-linux-package-management](https://www.digitalocean.com/community/tutorials/how-to-use-arch-linux-package-management)
>
> If you want color highlighting with pacman -Ss, you can uncomment Color from /etc/pacman.conf. It highlights different things than pacsearch, though, so you might want to try both and see which one you like better.
> <span style="white-space: pre-wrap"><code>sudo vi <font style="color: rgb(102,102,0);">/</font>etc<font style="color: rgb(102,102,0);">/</font>pacman<font style="color: rgb(102,102,0);">.</font>conf</code></span>
>
> ```bash
> ...
> #Misc options
> #UseSyslog
> Color
> #TotalDownload
> CheckSpace
> #VerbosePkgLists
> ....
> ```

> [!expand]- commands
> [https://www.digitalocean.com/community/tutorials/how-to-use-arch-linux-package-management](https://www.digitalocean.com/community/tutorials/how-to-use-arch-linux-package-management)
> 1. make sure all package databases are up to date
>     ```
>     sudo pacman -Sy
>     ```
> 2. searching package
>     ```
>     pacman -Ss
>     ```
> 3. list packages with keyword ‘keyword’
>     ```
>     pacseach
>     ```
> 4. install net-tools package
>     ```
>     sudo pacman -S net-tools
>     ```
> 5. get information of installed package
>     ```
>     pacman -Qi linux
>     ```
# Resources
- [https://wiki.archlinux.org/index.php/pacman](https://wiki.archlinux.org/index.php/pacman)
