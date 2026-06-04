---
title: "UNIX - Universal Package Managers"
created: 2021-08-27T20:20:52.287-05:00
modified: 2025-11-03T15:12:16.549-06:00
parent: "[[UNIX - Package Managers (All)]]"
children:
  - "[[AppImages (Universal Package Manager)]]"
  - "[[Flatpaks (Universal Package Manager)]]"
  - "[[Snap (Universal Package Manager)]]"
---
###### Universal Package Managers
- attempts to solve one of the fundamental problems with Linux as a desktop operating system: software availability and software distribution
- [[UNIX - Package Managers (All)|Linux package managers]] is awful for both developers and users. Snaps, Flatpaks & AppImages are intended to solve this fundamental problem with Linux based systems

# Why Universal Package Managers

In Linux, <strong>packages are specifically built for a single version of a single distribution</strong>. With a lot of tweaking, it is possible to make one <code>.deb</code> package that runs on all Debian based systems, but this is complicated and limits developers. It's also not practical at times due to version locking of dependencies.

If I create a deb package for Ubuntu 20.04, it will only work on that version. I also have to make a different package for 16.04, 18.04, 20.10 and so on. I already have to make four packages <em>just</em> for Ubuntu. I also need to make one for every Debian version, every Fedora version and every openSUSE version. RPM is more flexible in this regard but the locked dependency issue still gets in the way.

This means if I want to release a new version of my application, I have to create over 20 packages to cover the majority of Linux distributions, and that still won't cover every distro. A second possibility is to wait for distribution maintainers to add your package to the distribution but this usually takes an absurd amount of time. Moreover, then the distribution maintainers decide which version their users get instead of the software developer.

<strong>With a Universal Package Manager, a single package runs on every version of every distribution</strong> that supports the Universal Package Manager.

Additionally, with a Universal Package Manager, <strong>the developer publishes and maintains the package</strong>, instead of the distribution maintainer. So I as a developer can release new a version to all my users without having to wait on anyone else
# Universal Package Managers
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Nix]]
