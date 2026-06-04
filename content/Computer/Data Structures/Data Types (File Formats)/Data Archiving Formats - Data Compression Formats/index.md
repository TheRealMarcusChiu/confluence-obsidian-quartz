---
title: "Data Archiving Formats - Data Compression Formats"
created: 2019-08-29T00:04:08.398-05:00
modified: 2023-11-16T22:13:08.587-06:00
parent: "[[Data Types (File Formats)]]"
children:
  - "[[Data Compression]]"
  - "[[ISO Image]]"
  - "[[Zstandard]]"
---
- <strong>data archiving</strong> is the process of collecting and storing a group of files and directories into one file
- <strong>[[Data Compression|data compression]]</strong> is the act of shrinking the size of a file

# Formats

```merge-table
{
  "rows": [
    [
      {
        "content": "Official Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Archive",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Compression",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Platform",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "File Extension",
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
        "content": "[[Java - Archive File Formats (JAR - WAR - EAR)|Java Archive Formats]]\n[[Java - Archive File Formats (JAR - WAR - EAR)|(JAR - WAR - EAR)]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "cross platform",
      ".jar, .war, .ear",
      "an archive file for java applications"
    ],
    [
      {
        "content": "[[ISO Image]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "cross platform",
      ".iso",
      "archive file that contains an identical copy (or image) of data found on an optical disc, like a CD or DVD"
    ],
    [
      {
        "content": "Tape Archive",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "[[UNIX]]-like",
      ".tar",
      "a common archive format used on Unix-like systems\n\ngenerally used in conjunction with compressors such as gzip, bzip2, compress or xz to create .tar.gz, .tar.bz2, .tar.Z or tar.xz files"
    ],
    [
      {
        "content": "cpio",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "UNIX-like",
      ".cpio",
      ""
    ],
    [
      {
        "content": "gzip",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "UNIX-like",
      ".gz",
      "GNU Zip, the primary compression format used by Unix-like systems"
    ],
    [
      {
        "content": "Apple Disk iMaGe (DMG)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "[[Macintosh OSs (Mac OS X) - macOS|macOS]]",
      ".dmg",
      "Supports \"Internet-enabled\" disk images, which, once downloaded, are automatically decompressed, mounted, have the contents extracted, and thrown away."
    ],
    [
      {
        "content": "tar with gzip",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "UNIX-like",
      ".tar.gz",
      "The \"tarball\" format combines tar archives with a file-based compression scheme (usually gzip)"
    ]
  ],
  "tableStyle": "width: 95.1471%;"
}
```
