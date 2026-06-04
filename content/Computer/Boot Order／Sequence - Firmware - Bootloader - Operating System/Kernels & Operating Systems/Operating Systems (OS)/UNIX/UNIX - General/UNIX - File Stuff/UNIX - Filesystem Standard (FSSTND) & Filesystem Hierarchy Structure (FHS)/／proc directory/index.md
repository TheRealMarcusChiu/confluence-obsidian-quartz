---
title: "／proc directory"
created: 2019-08-31T14:19:46.241-05:00
modified: 2020-01-02T01:42:19.180-06:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children: []
---
[https://www.linux.com/news/discover-possibilities-proc-directory/](https://www.linux.com/news/discover-possibilities-proc-directory/)

The<strong> /proc directory</strong> is a strange beast. It doesn’t really exist, yet you can explore it. Its zero-length files are neither binary nor text, yet you can examine and display them. This special directory holds all the details about your [[Linux]] system, including its kernel, processes, and configuration parameters.

Under Linux, everything is managed as a file; even devices are accessed as files (in the /dev directory). Although you might think that “normal” files are either text or binary (or possibly device or pipe files), the <strong>/proc directory</strong> contains a stranger type: virtual files. These files are listed, but don’t actually exist on disk; the [[Operating Systems (OS)|operating system]] creates them on the fly if you try to read them.

Most virtual files always have a current timestamp, which indicates that they are constantly being kept up to date. The <strong>/proc directory</strong> itself is created every time you boot your box. You need to work as root to be able to examine the whole directory; some of the files (such as the process-related ones) are owned by the user who launched it. Although almost all the files are read-only, a few writable ones (notably in /proc/sys) allow you to change kernel parameters.

```merge-table
{
  "rows": [
    [
      {
        "content": "directory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "/proc/1",
      "- a directory with information about process number 1\n- Each process has a directory below /proc with the name being its process identification number"
    ],
    [
      "/proc/cpuinfo",
      "- Information about the processor, such as its type, make, model, and performance"
    ],
    [
      "/proc/devices",
      "- List of device drivers configured into the currently running kernel"
    ],
    [
      "/proc/dma",
      "- Shows which DMA channels are being used at the moment"
    ],
    [
      "/proc/filesystems",
      "- Filesystems configured into the kernel"
    ],
    [
      "/proc/interrupts",
      "- Shows which interrupts are in use, and how many of each there have been"
    ],
    [
      "/proc/imports",
      "- which I/O ports are in use at the moment"
    ],
    [
      "/proc/kcore",
      "- an image of the physical memory of the system\n- this is exactly the same size as your physical memory, but does not really take up that much memory; it is generated on the fly as programs access it\n- remember: unless you copy it elsewhere, nothing under /proc takes up any disspace at all"
    ],
    [
      "/proc/kmsg",
      "- Messages output by the kernel. These are also routed to <strong>syslog</strong>"
    ],
    [
      "/proc/ksyms",
      "- symbol table for the kernel"
    ],
    [
      "/proc/loadavg",
      "- The \\`load average' of the system; three meaningless indicators of how much work the system has to do at the moment"
    ],
    [
      "/proc/meminfo",
      "- information about memory usage, both physical and swap"
    ],
    [
      "/proc/modules",
      "- which kernel modules are loaded at the moment"
    ],
    [
      "/proc/net",
      "- status information about network protocols"
    ],
    [
      "/proc/self",
      "- a symbolic link to the process directory of the program that is looking at .rpco\n- when two process look at /proc, they get different links. this is mainly a convenience to make it easier for programs to get at their process directory"
    ],
    [
      "/proc/stat",
      "- various statistics about the system, such as the number of page faults since the system was booted"
    ],
    [
      "/proc/uptime",
      "- the time the system has been up"
    ],
    [
      "/proc/version",
      "- the kernel version"
    ]
  ]
}
```
