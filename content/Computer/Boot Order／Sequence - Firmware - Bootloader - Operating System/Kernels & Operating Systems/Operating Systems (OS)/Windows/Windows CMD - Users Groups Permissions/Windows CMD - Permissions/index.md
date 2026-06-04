---
title: "Windows CMD - Permissions"
created: 2019-11-17T23:10:53.377-06:00
modified: 2019-11-17T23:12:40.773-06:00
parent: "[[Windows CMD - Users Groups Permissions]]"
children: []
---
permission types:
- share permissions
- access control list permissions
- access control list permission inheritance

# <strong>Share Permissions</strong>

share permission options:
- full control
- change
- read

# <strong>Access Control List (ACL) Permissions (cacls - icacls)</strong>
[https://ss64.com/nt/icacls.html](https://ss64.com/nt/icacls.html)

a sequence of simple rights:
- <strong>N (deny access) </strong>- deny all access
- <strong>F (full access)</strong> - allows users to read, write, change, and delete files and subfolders. In addition, users can change permissions settings for all files and subdirectories
- <strong>M (modify access)</strong> - allows users to read and write of files and subfolders; also allows deletion of the folder
- <strong>RX (read and execute access)</strong> - allows users to view and run executable files, including scripts
- <strong>list folder contents</strong> - permits viewing and listing of files and subfolders as well as executing of files; inherited by folders only
- <strong>R (read-only access)</strong> - allows users to view the folder and subfolder contents
- <strong>W (write-only access)</strong> - allows users to add files and subfolders, allows you to write to a file
- <strong>D </strong>- remove user or group for no access

<span style="white-space: pre-wrap"><code>icacls “full path of file” /grant “user name or group”:switch</code></span>

a comma-separated list in parenthesis of specific rights:
- <strong>D (delete)</strong> -
- <strong>RC (read control)</strong> -
- <strong>WDAC (write DAC)</strong> -
- <strong>WO (write owner)</strong> -
- <strong>S (synchronize)</strong> -
- <strong>AS (access system security)</strong> -
- <strong>MA (maximum allowed)</strong> -
- <strong>GR (generic read)</strong> -
- <strong>GW (generic write)</strong> -
- <strong>GE (generic execute)</strong> -
- <strong>GA (generic all)</strong> -
- <strong>RD (read data/list directory)</strong> -
- <strong>WD (write data/add file)</strong> -
- <strong>AD (append data/add subdirectory)</strong> -
- <strong>REA (read extended attributes)</strong> -
- <strong>WEA (write extended attributes)</strong> -
- <strong>X (execute/traverse)</strong> -
- <strong>DC (delete child)</strong> -
- <strong>RA (read attributes)</strong> -
- <strong>WA (write attributes)</strong> -

###### example commands

grant John Full access to  a file named "test"
<span style="white-space: pre-wrap"><code>icacls "D:\\test" /grant John:F</code></span>

grant User1 Delete and Write DAC permissions to a file named "Test1"
<span style="white-space: pre-wrap"><code>icacls test1 /grant User1:(d,wdac)</code></span>

# <strong>Access Control List (ACL) </strong><strong>Permissions Inheritance (cacls - icacls)</strong>

the Access Control List (ACL) flags have the following meanings:
- <strong>IO: Inherit Only</strong> - this flag indicates that this Access Control Entry (ACE) does not apply to the current object (both containers/directories and files)
- <strong>CI: Container Inherit</strong> - this flag indicates that subordinate containers/directories will inherit this ACE
- <strong>OI: Object Inherit</strong> - this flag indicates that subordinate files will inherit the ACE
- <strong>NP: Non-Propagate</strong> - this flag indicates that the subordinate objects (both directories/containers and files) will not propagate the inherited ACE any further
- <strong>I: Inherited </strong>- this flag indicates that this Access Control Entry (ACE) was inherited from parent container/directory

When an administrator adds a new ACE to the access control list, he or she can select the scope of the entry's inheritance. The following are specific to the NTFS file system:

```merge-table
{
  "rows": [
    [
      {
        "content": "Flag Combinations",
        "header": true,
        "bg": "#F4F5F7",
        "colspan": 4
      },
      null,
      null,
      null,
      {
        "content": "Propagation Results",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "IO",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CI",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "OI",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "NP",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Target folder"
    ],
    [
      {
        "bg": "red"
      },
      {
        "bg": "red"
      },
      {
        "bg": "red"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "N/A"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Target folder, child object (file), grandchild object (file)"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Target folder, child object (file)"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Target folder, child folder, grandchild folder"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Target folder, child folder"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Target folder, child folder, child object (file), grandchild folder, grandchild object (file)"
    ],
    [
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Target folder, child folder, child object (file)"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "N/A"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "N/A"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Child object (file), grandchild object (file)"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Child object (file)"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Child folder, grandchild folder"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Child folder"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "bg": "red",
        "align": "center"
      },
      "Child folder, child object (file), grandchild folder, grandchild object (file)"
    ],
    [
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "✔",
        "bg": "green",
        "align": "center"
      },
      "Child folder, child object (file)"
    ]
  ],
  "tableStyle": "width: 868.0px;"
}
```
###### icacls command
<span style="white-space: pre-wrap"><code>icacls "D:\\test" /grant John:(OI)(CI)F /T</code></span>
