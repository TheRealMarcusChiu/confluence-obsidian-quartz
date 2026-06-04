---
title: "UNIX - System File Tables (File Descriptor - Open File - Vnode - Inode)"
created: 2019-12-31T11:35:27.416-06:00
modified: 2019-12-31T14:12:28.055-06:00
parent: "[[UNIX - File Stuff]]"
children:
  - "[[Inode (Index Node)]]"
---
### 4 System File Tables
- <strong>file descriptor table</strong> - that maps file descriptors (small integers) to entries in the open file table
- <strong>open file table</strong> - holds entries each containing (among other things) a file offset and a pointer to the in-memory inode table
- <strong>vnode</strong> -
- <strong>inode table</strong> - contains
```merge-table
{
  "rows": [
    [
      {
        "content": "System File Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "File Descriptor",
      "A user process and the kernel must agree on names for open file connections. Analogous to the difference between a program and a process, there is a difference between a file and an open \"connection\" to a file: for example we may have two open connections to the same file, but be in different positions in the file with respect to our next read. So the file name itself isn't really appropriate for communicating which connection you want to read the next byte from. So the OS and the user process refer to each open connection by a number (type int) called a <em>file descriptor</em>. Standard input, output and error default to file descriptors 1, 2 and 3 respectively"
    ],
    [
      "Open File",
      "The system needs to keep track of each \"connection\" to a file. Since the same file may have many open connections, this \"connection\" is truly distinct from the concept of a file. Since distinct processes may even share a connections (say two processes wanted to write to the same log file, each adding new data to the end of the file), the \"connection\" information cannot be kept inside the process table. So the kernel keeps a data structure called the <em>system open-file table</em> which has an entry for each connection. Each entry contains the connection <em>status</em>, e.g. read or write, the <em>current offset</em> in the file, and a pointer to a <em>vnode</em>, which is the OS's structure representing the file, irrespective of where in the file you may currently be looking. (Note: Linux names their vnode-ish data structure \"generic inodes\".)"
    ],
    [
      "Vnode",
      "The kernel keeps yet another table, the <em>Vnode table</em>, which has an entry for each open file or device. Each entry, called a <em>Vnode</em>, contains information about the type of file and pointers to functions that operate on the file. Typically for files, the vnode also contains a copy of the <em>inode</em> for the file, which has \"physical\" information about the file, e.g. where exactly on the disk the file's data resides."
    ],
    [
      "Inode (Physical Device)",
      "a file may be broken up into many data blocks, which may be widely distributed across the physical drive. The <em>inode</em> for a file contains the locations of each of the data blocks comprising the file. Directories don't have data blocks, but in a similar fashion have directory blocks, which contain inode/filename pairs; i.e. the names of the files/directories in the directory, along with the inodes for each. Each directory contains entries for \".\" and \"..\" --- the current directory and its parent"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

![[UNIX - System File Tables (File Descriptor - Open File - Vnode - Inode)/system-file-types.png|900]]

to modify: [https://www.draw.io/#G1hCi5VyIMu2wRKm6E18aVf9KOVJT8-bht](https://www.draw.io/#G1hCi5VyIMu2wRKm6E18aVf9KOVJT8-bht)
### Case Examples
- When two or more processes open a file for reading, there's an entry in the open file table per open. There is even an entry per open if <strong>one</strong> process opens the file multiple times
- If file1.txt is opened twice, in the same or two different processes, there are two different open file table entries (but just one entry in the in-memory inode table)

### <strong>Reference Counts</strong>

Several file descriptors may actually refer to the same system open-file table entries. That entry in the system open-file table can't be removed until <em>all</em> of those referencing file descriptors have been closed.

Several system open-file table entries may actually refer to the same vnode table entry. That vnode table entry cannot be removed from the vnode table until <em>all</em> of those referencing system open-file table entries have been removed.

A file may be referenced by several entries in the filesystem (this comes from "hard links", which you can create with the <code>ln</code> utility) and the file cannot be removed from the filesystem until <em>all</em> of those references to the file have been removed.

Sensing a pattern? System open-file table entries, vnode table entries, and filesystem entries (inodes actually) each contain a counter (called a <em>reference count</em>) that tracks the number of references to that object. Each time one of the referencing objects goes away or changes to refer to something else, that counter gets decremented. When it hits zero, the object itself can be deleted. Reference counting is an important idea and is found in lots of places in CS.
### <strong>I/O via the Kernel Directly vs I/O via the C Standard Library</strong>

When we do I/O via the C standard library (i.e. with fscanf, fprintf, fopen, fclose), the calls to open, close, read and write don't go away, it's just that the library routines make the calls, rather than our code. In other words, C standard library I/O is just an extra layer. Consider the following diagram, in which a process makes the system call <code>open</code> to read from <code>foo.txt</code>, and the C standard library call <code>fopen</code> to write to <code>bar.txt</code>. Note that the diagram shows another process
```
int main() {
	int fd = open("foo.txt", O_RDONLY); // I/O System Call
	FILE* fs = fopen("bar.txt", "w");   // C Standard Library I/O
}
```
