---
title: "grep"
created: 2019-03-15T15:49:41.115-05:00
modified: 2021-08-12T14:00:24.324-05:00
parent: "[[UNIX - Shell Commands]]"
children: []
---
<span style="white-space: pre-wrap"><code>grep -rnw 'path/to/folder' -e "import"</code></span>

- -r or -R is recursive,
- -n is line number, and
- -w stands match the whole word.
- -l (lower-case L) can be added to just give the file name of matching files.

Along with these, --exclude, --include, --exclude-dir or --include-dir parameters could be used for efficient searching:

This will only search through the files which have .c or .h extensions:
<span style="white-space: pre-wrap"><code>  grep --include=\\\*.{c,h} -rnw '/path/to/somewhere/' -e "pattern"</code></span>

This will exclude searching all the files ending with .o extension:
<span style="white-space: pre-wrap"><code>  grep --exclude=\*.o -rnw '/path/to/somewhere/' -e "pattern"</code></span>

Just like exclude files, it's possible to exclude/include directories through --exclude-dir and --include-dir parameter. For example, this will exclude the dirs dir1/, dir2/ and all of them matching \*.dst/:
<span style="white-space: pre-wrap"><code>  grep --exclude-dir={dir1,dir2,\*.dst} -rnw '/path/to/somewhere/' -e "pattern"</code></span>

For more options check man grep.
# Grep - Other Versions
- bingrep
- ngrep
- sngrep
- cgrep
- bgrep
- ugrep
- sgrep
- vgrep
