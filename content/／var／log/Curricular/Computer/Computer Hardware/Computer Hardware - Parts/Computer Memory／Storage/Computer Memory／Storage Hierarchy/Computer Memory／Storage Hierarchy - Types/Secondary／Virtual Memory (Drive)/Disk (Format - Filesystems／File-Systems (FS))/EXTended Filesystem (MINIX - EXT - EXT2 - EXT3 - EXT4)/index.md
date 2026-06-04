---
title: "EXTended Filesystem (MINIX - EXT - EXT2 - EXT3 - EXT4)"
created: 2019-12-31T12:06:50.641-06:00
modified: 2024-08-07T01:09:24.980-05:00
parent: "[[Disk (Format - Filesystems／File-Systems (FS))]]"
children: []
---
- MINIX Filesystem - could handle filenames only up to 14 characters and address only 64MB of storage
```merge-table
{
  "rows": [
    [
      {
        "content": "EXT File System Type",
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
      {
        "content": "EXT",
        "bg": "#F4F5F7"
      },
      "- solved problems of MINIX filesystem\n- could address up to 2GB of storage and handle 255-character filenames\n- primitive time-stamping (only one timestamp per file, rather than the 3 separate stamps for inode creation, file access, and file modification we're familiar with today)"
    ],
    [
      {
        "content": "EXT2",
        "bg": "#F4F5F7"
      },
      "- offered maximum file-sizes in the gigabytes and filesystem sizes in the terabytes\n- prone to catastrophic corruption if the system crashed or lost power while data was being written to disk\n- suffered from significant performance losses due to fragmentation (the storage of a single file in multiple places, physically scattered around a rotating disk) as time went on"
    ],
    [
      {
        "content": "EXT3",
        "bg": "#F4F5F7"
      },
      "- like ext2 before it, ext3 uses 16-bit internal addressing. This means that with a block-size of 4K, the largest file-size it can handle is 2 TiB in a maximum filesystem size of 16 TiB\n- uses <em>journaling</em> to solve the inconsistent state problem if the system crashed or lost power while data was being written to disk\n- 3 levels of journaling are available in the [[Linux Kernel]] implementation of ext3: <strong>journal</strong>, <strong>ordered</strong>, and <strong>write-back</strong>"
    ],
    [
      {
        "content": "EXT4",
        "bg": "#F4F5F7"
      },
      "- is functionally very similar to ext3, but brings large filesystem support, improved resistance to fragmentation, higher performance, and improved timestamps\n- uses 48-bit internal addressing, making it theoretically possible to allocate files up to 16 TiB on filesystems up to 1,000,000 TiB (1 EiB)."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# 3 Levels of Journaling
- <strong>Journal</strong> is the lowest risk mode, writing both data and metadata to the journal before committing it to the filesystem. This ensures consistency of the file being written to, as well as the filesystem as a whole, but can significantly decrease performance.
- <strong>Ordered</strong> is the default mode in most Linux distributions; ordered mode writes metadata to the journal but commits data directly to the filesystem. As the name implies, the <em>order</em> of operations here is rigid: First, metadata is committed to the journal; second, data is written to the filesystem, and only then is the associated metadata in the journal flushed to the filesystem itself. This ensures that, in the event of a crash, the metadata associated with incomplete writes is still in the journal, and the filesystem can sanitize those incomplete writes while rolling back the journal. In ordered mode, a crash may result in corruption of the file or files being actively written to during the crash, but the filesystem itself—and files not actively being written to—are guaranteed safe.
- <strong>Write-back</strong> is the third—and least safe—journaling mode. In writeback mode, like ordered mode, metadata is journaled, but data is not. Unlike ordered mode, metadata and data alike may be written in whatever order makes sense for best performance. This can offer significant increases in performance, but it's much less safe. Although writeback mode still offers a guarantee of safety to the filesystem itself, files that were written to during <em>or </em>before the crash are vulnerable to loss or corruption.
