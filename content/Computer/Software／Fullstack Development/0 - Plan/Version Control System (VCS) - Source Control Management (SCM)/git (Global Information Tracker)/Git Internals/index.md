---
title: "Git Internals"
created: 2020-08-19T00:25:13.460-05:00
modified: 2025-10-29T11:14:40.285-05:00
parent: "[[git (Global Information Tracker)]]"
children:
  - "[[Git - Java Implementation]]"
  - "[[Git From the Inside Out]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [[Git From the Inside Out]]
- [https://git-scm.com/book/en/v2/Git-Internals-Git-Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

# GIT INIT

- create .git
  - objects/ \<- immutable
  - HEAD
  - refs/ \<- mutable
    - heads/master
# GIT ADD

- void add(String path) directory or file path
  - create NEW blob file for each NEW/MODIFIED file
    - compressed content of file
    - name is SHA-1 hash
      - first 2 characters used as directory
      - remaining used as file-name
      - e.g. .git/objects/2e/65efe2a145dda7ee51d1741299f848e5bf752e
  - add file(s) to index (i.e. .git/index)
    - e.g. this is the index after the \`git add\` command
      - data/letter.txt 2e65efe2a145dda7ee51d1741299f848e5bf752e
    - only files are listed in the index
# GIT COMMIT

3 steps:
- updates tree-graph
- creates a commit object
- points current branch to the new commit object

tree-graph is composed of 2 types of objects:
- blobs - created by add
- trees - created by commits

###### (1) Tree-Graph

- example tree object:
  100664 blob 2e65efe2a145dda7ee51d1741299f848e5bf752e letter.txt
  100664 blob 56a6051ca2b02b04ef92d5150c9ef600403cb1de number.txt
  - (1) states file's permissions
  - (2) object type
  - (3) hash of object
  - (4) file/directory name
  040000 tree 0eed1217a2947f4930583229987d90fe5e8e0b74 data
###### (2) Create a Commit Object

- commit object is just another file in .git/objects/
- first commit example:
  tree ffe298c3ce8bb07326f888907996eaa48d266db4
  author Marcus Chiu \<marcuschiu9@[gmail.com](http://gmail.com)\> 1424798436 -0500
  committer Marcus Chiu \<marcuschiu9@[gmail.com](http://gmail.com)\> 1424798436 -0500

commit message 1
- second commit example:
  tree ce72afb5ff229a39f6cce47b00d1b0ed60fe3556
  parent 774b54a193d6cfdd081e581a007d2e11f784b9fe
  author Marcus Chiu \<marcuschiu9@[gmail.com](http://gmail.com)\> 1424813101 -0500
  committer Marcus Chiu \<marcuschiu9@[gmail.com](http://gmail.com)\> 1424813101 -0500

commit message 2
- first line points at tree graph (hash represents root)
- .git/refs/heads/master content is hash of commit object
