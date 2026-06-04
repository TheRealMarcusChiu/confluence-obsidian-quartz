---
title: "UNIX - Portable Operating System Interface (POSIX)"
created: 2020-01-01T23:02:39.892-06:00
modified: 2022-07-22T19:11:14.715-05:00
parent: "[[UNIX - General]]"
children:
  - "[[UNIX - POSIX Signals]]"
---
###### Portable Operating System Interface (POSIX)
- is an IEEE standard designed to facilitate application portability
- is an attempt by a consortium of vendors to create a single standard version of [[UNIX]]
- If they are successful, it will make it easier to port applications between hardware platforms

# POSIX - Standards
###### [C API](http://pubs.opengroup.org/onlinepubs/9699919799/functions/contents.html)

> [!expand]- Click here to expand...
> Greatly [extends ANSI C](https://stackoverflow.com/questions/9376837/difference-bewteen-c-standard-library-and-c-posix-library/37969420#37969420) with things like:
> - more file operations: <code>mkdir</code>, <code>dirname</code>, <code>symlink</code>, <code>readlink</code>, <code>link</code> (hardlinks), [<code>poll()</code>](https://stackoverflow.com/questions/12444679/how-does-the-poll-c-linux-function-work/44127590#44127590), <code>stat</code>, <code>sync</code>, [<code>nftw()</code>](https://stackoverflow.com/questions/8436841/how-to-recursively-list-directories-in-c-on-linux/29402705)
> - process and threads: <code>fork</code>, <code>execl</code>, [<code>wait</code>](https://stackoverflow.com/questions/7248031/meaning-of-dollar-question-mark-in-shell-scripts/57303942#57303942), <code>pipe</code>, semaphores [<code>sem\_\*</code>](https://stackoverflow.com/questions/16400820/how-to-use-posix-semaphores-on-forked-processes-in-c/52042490#52042490), shared memory (<code>shm\_\*</code>), <code>kill</code>, scheduling parameters (<code>nice</code>, <code>sched\_\*</code>), <code>sleep</code>, <code>mkfifo</code>, [<code>setpgid()</code>](https://stackoverflow.com/questions/6108953/how-does-ctrl-c-terminate-a-child-process/52042970#52042970)
> - networking: [<code>socket()</code>](https://stackoverflow.com/questions/11208299/how-to-make-an-http-get-request-in-c-without-libcurl/35680609#35680609)
> - memory management: <code>mmap</code>, <code>mlock</code>, <code>mprotect</code>, <code>madvise</code>, [<code>brk()</code>](https://stackoverflow.com/questions/6988487/what-does-the-brk-system-call-do/31082353#31082353)
> - utilities: regular expressions (<code>reg\*</code>)
>
> Those APIs also determine underlying system concepts on which they depend, e.g. <code>fork</code> requires a concept of a process.
>
> Many [Linux system calls](https://unix.stackexchange.com/questions/421750/where-do-you-find-the-syscall-table-for-linux) exist to implement a specific POSIX C API function and make Linux compliant, e.g. <code>sys\_write</code>, <code>sys\_read</code>, ... Many of those syscalls also have Linux-specific extensions however.
>
> Major Linux desktop implementation: glibc, which in many cases just provides a shallow wrapper to system calls.
###### [CLI Utilities](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/contents.html)

> [!expand]- Click here to expand...
> e.g.: <code>cd</code>, <code>ls</code>, <code>echo</code>, ...
>
> Many utilities are direct shell front ends for a corresponding C API function, e.g. <code>mkdir</code>.
>
> Major Linux desktop implementation: GNU Coreutils for the small ones, separate GNU projects for the big ones: <code>sed</code>, <code>grep</code>, <code>awk</code>, ... Some CLI utilities are implemented by Bash [as built-ins](https://unix.stackexchange.com/questions/11454/what-is-the-difference-between-a-builtin-command-and-one-that-is-not).
###### [Shell Language](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18)

> [!expand]- Click here to expand...
> e.g. <code>a=b; echo "\$a"</code>
>
> Major Linux desktop implementation: [GNU Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).
###### [Environment Variables](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap08.html#tag_08)

> [!expand]- Click here to expand...
> e.g. <code>HOME</code>, <code>PATH</code>.
>
> <code>PATH</code>[search semantics are specified](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_09_01_01), including [how slashes prevent <code>PATH</code> search](https://stackoverflow.com/questions/6331075/why-do-you-need-dot-slash-before-executable-or-script-name-to-run-it-in-bas/6331085#6331085).
###### [Program Exit Status](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_08)

> [!expand]- Click here to expand...
> ANSI C says <code>0</code> or <code>EXIT\_SUCCESS</code> for success, <code>EXIT\_FAILURE</code> for failure, and leaves the rest implementation defined.
>
> POSIX adds:
> - <code>126</code>: command found but not executable
> - <code>127</code>: command not found
> - <code>\>128</code>: terminated by a signal
>
> But POSIX does not seem to specify the <code>128 + SIGNAL\_ID</code> rule used by Bash: [https://unix.stackexchange.com/questions/99112/default-exit-code-when-process-is-terminated](https://unix.stackexchange.com/questions/99112/default-exit-code-when-process-is-terminated)
###### [Regular Expression](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html#tag_09)

> [!expand]- Click here to expand...
> There are two types: BRE (Basic) and ERE (Extended). Basic is deprecated and only kept to not break APIs.
>
> Those are implemented by C API functions, and used throughout CLI utilities, e.g. <code>grep</code> accepts BREs by default, and EREs with <code>-E</code>.
>
> e.g. <code>echo 'a.1' | grep -E 'a.\[\[:digit:\]\]'</code>
>
> Major Linux implementation: glibc implements the functions under [regex.h](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/regex.h.html) which programs like <code>grep</code> can use as backend.
###### [Directory Structure](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap10.html#tag_10)

> [!expand]- Click here to expand...
> e.g. <code>/dev/null</code>, <code>/tmp</code>
>
> The Linux [[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)|FHS]] greatly extends POSIX
###### [Filenames](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_267)

> [!expand]- Click here to expand...
> - <code>/</code> is the path separator
> - <code>NUL</code> cannot be used
> - <code>.</code> is <code>cwd</code>, <code>..</code> parent
> - portable filenames
> 	- use at most max 14 chars and 256 for the full path
> 	- can only contain: <code>a-zA-Z0-9.\_-</code>
>
> See also: [what is posix compliance for filesystem?](https://stackoverflow.com/questions/18550253/what-is-posix-compliance-for-filesystem)
###### [Command Line Utility API Conventions](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html)

> [!expand]- Click here to expand...
> Not mandatory, used by POSIX, but almost nowhere else, notably not in GNU. But true, it is too restrictive, e.g. single letter flags only (e.g. <code>-a</code>), no double hyphen long versions (e.g. <code>--all</code>).
>
> A few widely used conventions:
> - <code>-</code> means stdin where a file is expected
> - <code>--</code> terminates flags, e.g. <code>ls -- -l</code> to list a directory named <code>-l</code>
>
> See also: [Are there standards for Linux command line switches and arguments?](https://stackoverflow.com/questions/8957222/are-there-standards-for-linux-command-line-switches-and-arguments)
###### "POSIX ACLs" (Access Control Lists)

> [!expand]- Click here to expand...
> e.g. as used as backend for [<code>setfacl</code>](https://askubuntu.com/questions/487527/give-specific-user-permission-to-write-to-a-folder-using-w-notation/809562#809562)
>
> This [was withdrawn](https://unix.stackexchange.com/questions/489820/why-was-posix-1e-withdrawn) but it was implemented in several OSes, including [in Linux with <code>setxattr</code>](https://www.linuxquestions.org/questions/linux-kernel-70/system-call-to-set-file-acls-in-linux-537615/#post5988355)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
