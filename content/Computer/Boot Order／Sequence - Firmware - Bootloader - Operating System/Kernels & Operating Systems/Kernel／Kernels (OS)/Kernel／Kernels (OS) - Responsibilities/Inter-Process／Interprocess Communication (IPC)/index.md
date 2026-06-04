---
title: "Inter-Process／Interprocess Communication (IPC)"
created: 2019-09-18T10:40:35.359-05:00
modified: 2023-11-16T16:29:22.413-06:00
parent: "[[Kernel／Kernels (OS) - Responsibilities]]"
children: []
---
###### Inter-Process-Communication (IPC)
````excerpt
- are mechanisms provided by the kernel to allow [[UNIX - Process|processes]] to communicate with each other
- on modern systems, IPCs form the web that binds together each process within a large-scale software architecture
````
^excerpt

###### IPC Mechanisms
1. Signals
2. Anonymous Pipes
3. Named Pipes or FIFOs
4. [[UNIX System V|SysV]] Message Queues
5. POSIX Message Queues
6. SysV Shared memory
7. POSIX Shared memory
8. SysV semaphores
9. POSIX semaphores
10. FUTEX locks
11. File-backed and anonymous shared memory using <em>mmap</em>
12. [[UNIX]] Domain Sockets
13. Netlink Sockets
14. Network Sockets
15. Inotify mechanisms
16. FUSE subsystem
17. D-Bus subsystem

# SIGNALS

see: [[UNIX - POSIX Signals]]

Signals are the cheapest forms of IPC provided by Linux. Their primary use is to notify processes of change in states or events that occur within the kernel or other processes. We use signals in the real world to convey messages with the least overhead - think of hand and body gestures. For example, in a crowded gathering, we raise a hand to gain attention, wave a hand at a friend to greet, and so on.

On Linux, the kernel notifies a process when an event or state change occurs by interrupting the process's normal flow of execution and invoking one of the signal handler functions registered by the process or by invoking one of the default signal dispositions supplied by the kernel, for the said event.
# ANONYMOUS PIPES

Anonymous pipes (or simply pipes, for short) provide a mechanism for one process to stream data to another. A pipe has two ends associated with a pair of file descriptors - making it a one-to-one messaging or communication mechanism. One end of the pipe is the read-end which is associated with a file-descriptor that can only be read, and the other end is the write-end which is associated with a file descriptor that can only be written. This design means that <em>pipes are essentially half-duplex</em>.

Anonymous pipes can be set up and used only between processes that share parent-child relationship. Generally the parent process creates a pipe and then forks child processes. Each child process gets access to the pipe created by the parent process via the file descriptors that get duplicated into their address space. This allows the parent to communicate with its children, or the children to communicate with each other using the shared pipe.

Pipes are generally used to implement Producer-Consumer design amongst processes - where one or more processes would produce data and stream them on one end of the pipe, while other processes would consume the data stream from the other end of the pipe.
# NAMED PIPES OR FIFO

Named pipes (or FIFO) are variants of pipe that allow communication between processes that are not related to each other. The processes communicate using named pipes by opening a special file known as a FIFO file. One process opens the FIFO file from writing while the other process opens the same file for reading. Thus any data written by the former process gets streamed through a pipe to the latter process. The FIFO file on disk acts as the contract between the two processes that wish to communicate.
# MESSAGE QUEUES

Message Queues are synonymous to mailboxes. One process writes a message packet on the message queue and exits. Another process can access the message packet from the same message queue at a latter point in time. The advantage of message queues over pipes/FIFOs are that the sender (or writer) processes do not have to wait for the receiver (or reader) processes to connect. Think of communication using pipes as similar to two people communicating over phone, while message queues are similar to two people communicating using mail or other messaging services.

There are two standard specifications for message queues.
1. <strong>SysV message queues</strong>.
   The AT&T SysV message queues support message channeling. Each message packet sent by senders carry a message number. The receivers can either choose to receive message that match a particular message number, or receive all other messages excluding a particular message number or all messages.
2. <strong>POSIX message queues</strong>.
   The POSIX message queues support message priorities. Each message packet sent by the senders carry a priority number along with the message payload. The messages get ordered based on the priority number in the message queue. When the receiver tries to read a message at a later point in time, the messages with higher priority numbers get delivered first. POSIX message queues also support asynchronous message delivery using threads or signal based notification.

Linux support both of the above standards for message queues.
# SHARED MEMORY

As the name implies, this IPC mechanism allows one process to share a region of memory in its address space with another. This allows two or more processes to communicate data more efficiently amongst themselves with minimal kernel intervention.

There are two standard specifications for Shared memory.
1. <strong>SysV Shared memory</strong>. Many applications even today use this mechanism for historical reasons. It follows some of the artifacts of SysV IPC semantics.
2. <strong>POSIX Shared memory</strong>. The POSIX specifications provide a more elegant approach towards implementing shared memory interface. On Linux, POSIX Shared memory is actually implemented by using files backed by RAM-based filesystem. I recommend using this mechanism over the SysV semantics due to a more elegant file based semantics.

# SEMAPHORES

Semaphores are locking and synchronization mechanism used most widely when processes share resources. Linux supports both SysV semaphores and POSIX semaphores. POSIX semaphores provide a more simpler and elegant implementation and thus is most widely used when compared to SysV semaphores on Linux.
# FUTEXES

Futexes are high-performance low-overhead locking mechanisms provided by the kernel. Direct use of futexes is highly discouraged in system programs. Futexes are used internally by POSIX threading API for condition variables and its mutex implementations.
# UNIX DOMAIN SOCKETS

UNIX Domain Sockets provide a mechanism for implementing applications that communicate using the Client-Server architecture. They support both stream and datagram oriented communication, are full-duplex and support a variety of options. They are very widely used for developing many large-scale frameworks.
# NETLINK SOCKETS

Netlink sockets are similar to UNIX Domain Sockets in its API semantics - but used mainly for two purposes:
- For communication between a process in user-space to a thread in kernel-space
- For communication amongst processes in user-space using broadcast mode

# NETWORK SOCKETS

Based on the same API semantics like UNIX Domain Sockets, Network Sockets API provide mechanisms for communication between processes that run on different hosts on a network. Linux has rich support for features and various protocol stacks for using network sockets API. For all kinds of network programming and distributed programming - network socket APIs form the core interface.
# INOTIFY MECHANISMS

The Inotify API on Linux provides a method for processes to know of any changes on a monitored file or a directory asynchronously. By adding a file to inotify watch-list, a process will be notified by the kernel on any changes to the file like open, read, write, changes to file stat, deleting a file and so on.
# FUSE SUBSYSTEM

FUSE provides a method to implement a fully functional filesystem in user-space. Various operations on the mounted FUSE filesystem would trigger functions registered by the user-space filesystem handler process. This technique can also be used as an IPC mechanism to implement Client-Server architecture without using socket API semantics.
# D-BUS SUBSYSTEM

D-Bus is a high-level IPC mechanism built generally on top of socket API that provides a mechanism for multiple processes to communicate with each other using various messaging patterns. D-Bus is a standards specification for processes communicating with each other and very widely used today by GUI implementations on Linux following [Freedesktop.org](http://Freedesktop.org) specifications.
