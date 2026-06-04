---
title: "Makefile"
created: 2019-12-25T22:45:13.391-06:00
modified: 2019-12-25T23:01:03.101-06:00
parent: "[[make]]"
children: []
---
A makefile consists of a set of rules. A rule consists of 3 parts: a target, a list of pre-requisites and a command, as follows:
<span style="white-space: pre-wrap"><code><em>target</em>: <em>pre-req-1</em> <em>pre-req-2</em> ...</code><br><code>	<em>command</em></code></span>

### Simple Makefile
the makefile can be named "<code>makefile</code>", "<code>Makefile</code>" or "<code>GNUMakefile</code>", without file extension
```
all: hello.exe

hello.exe: hello.o
	 gcc hello.o -o hello.exe

hello.o: hello.c
	 gcc -c hello.c
     
clean:
	 rm hello.o hello.exe
```

this makefile builds hello.c into hello.exe
- In the above example, the rule "<code>all</code>" has a pre-requisite "<code>hello.exe</code>". <code>make</code> cannot find the file "<code>hello.exe</code>", so it looks for a rule to create it. The rule "<code>hello.exe</code>" has a pre-requisite "<code>hello.o</code>". Again, it does not exist, so <code>make</code> looks for a rule to create it. The rule "<code>hello.o</code>" has a pre-requisite "<code>hello.c</code>". <code>make</code> checks that "<code>hello.c</code>" exists and it is newer than the target (which does not exist). It runs the command "<code>gcc -c hello.c</code>". The rule "<code>hello.exe</code>" then run its command "<code>gcc -o hello.exe hello.o</code>". Finally, the rule "<code>all</code>" does nothing
```cpp
// hello.c
#include <stdio.h>
 
int main() {
    printf("Hello, world!\n");
    return 0;
}
```
### Running Makefile

have both makefile and hello.c under the same directory

to build, execute the make command
```
> ls
hello.c makefile
> make
gcc -c hello.c
gcc -o hello.exe hello.o
> ls
hello.c hello.o hello.exe makefile
```

to undo build, run the following command
```
> make clean
hello.c makefile
```
