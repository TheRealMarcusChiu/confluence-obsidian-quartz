---
title: "yum (Yellowdog Updater, Modified)"
created: 2019-03-15T03:54:25.095-05:00
modified: 2026-05-21T17:58:59.681-05:00
parent: "[[RPM Package Managers]]"
children: []
---
###### yum (Yellowdog Updater, Modified)
````excerpt
- is an automatic updater and package installer/remover for rpm systems
- it automatically computes dependencies and figures out what things should occur to install packages
- it makes it easier to maintain groups of machines without having to manually update each one using rpm. Yum has a plugin interface for adding simple features
- can also be used from other python programs via its module interface
````
^excerpt

# Configuration

> [!expand]- when modifying yum.repos.d/
> When changing the yum.repos.d
> ```
> yum clean all
> yum clean metadata
> yum list all
> ```
# Command

> [!expand]- basic commands
> Cheat sheet: [https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf](https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf)
>
> Yum upgrade and yum update will perform update to the latest version of package, but:
> ```
> sudo yum update   # will preserve obsolete packages
> sudo yum upgrade  # will delete obsolete packages
> ```

> [!expand]- group
> The <code>yum groupinstall …</code> command installs a bundle of packages that are designated as a group so that you don't need to install a bunch of individual packages yourself to have all of the features. So <code>yum groupinstall "Engineering and Scientific”</code> would install a bunch of packages that someone decided should be used on engineering and scientific workstations.
>
> Install a bunch of packages deemed “Engineering and Scientific”:
> - 
>     ```
>     yum groupinstall "Engineering and Scientific"
>     ```
>
> Would upgrade those packages if necessary (and install any new ones)
> - 
>     ```
>     yum groupupdate "Engineering and Scientific"
>     ```
>
> Would remove all of them
> - 
>     ```
>     yum groupremove "Engineering and Scientific"
>     ```
>
> will list the possible groups
> - 
>     ```
>     yum grouplist
>     ```
>
> will show what packages are members of groupname (you will need "quotes" if there are spaces in the group name)
> - 
>     ```
>     yum groupinfo groupname
>     ```
# Resources
- [http://yum.baseurl.org/](http://yum.baseurl.org/)
