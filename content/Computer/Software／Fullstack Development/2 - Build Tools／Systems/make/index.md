---
title: "make"
created: 2019-10-30T15:53:31.527-05:00
modified: 2019-12-31T18:07:33.890-06:00
parent: "[[2 - Build Tools／Systems]]"
children:
  - "[[Makefile]]"
---
The way in which we design a software system is that we first write code, then the compiler compiles it and creates executable files. These executable files are the ones that carry out the actual task. “Make” is a tool that controls the generation of executables and other non-source files of a program from the program’s source files.

The <strong>make</strong> tool needs to know how to build your program. It gets its knowledge of how to build your program from a file called the “[[Makefile]]”. This makefile lists each of the non-source files and how to compute it from other files. When you write a program, you should write a makefile for it, so that it is possible to use “Make” to build and install the program. Simple stuff! If you didn’t understand it, go back and read the paragraph again because it’s important for the next part.

when your try to uninstall, it becomes complicated if you installed with <code>make install</code>. This is where <code>[[checkinstall - auto-apt|checkinstall]]</code> comes in handy

[https://thoughtbot.com/blog/the-magic-behind-configure-make-make-install](https://thoughtbot.com/blog/the-magic-behind-configure-make-make-install)
### Make
```bash
./configure  # scans system and generates a Makefile from Makefile.in template
make		 # uses Makefile to build the program
make install # uses Makefile to install the program. may require sudo
make clean   # optional
```

There are three distinct steps in this process:
1. Configure the software
   
   The <code>configure</code> script is responsible for getting ready to build the software on your specific system. It makes sure all of the dependencies for the rest of the build and install process are available, and finds out whatever it needs to know to use those dependencies.
   
   Unix programs are often written in C, so we’ll usually need a C compiler to build them. In these cases the <code>configure</code> script will establish that your system does indeed have a C compiler, and find out what it’s called and where to find it.
2. Build the software
   
   Once <code>configure</code> has done its job, we can invoke <code>make</code> to build the software. This runs a series of tasks defined in a <code>Makefile</code> to build the finished program from its source code.
   
   The tarball you download usually doesn’t include a finished <code>Makefile</code>. Instead it comes with a template called <code>[Makefile.in](http://Makefile.in)</code> and the <code>configure</code> script produces a customised <code>Makefile</code> specific to your system.
3. Install the software
   
   Now that the software is built and ready to run, the files can be copied to their final destinations. The <code>make install</code> command will copy the built program, and its libraries and documentation, to the correct locations.
   
   This usually means that the program’s binary will be copied to a directory on your <code>PATH</code>, the program’s manual page will be copied to a directory on your <code>MANPATH</code>, and any other files it depends on will be safely stored in the appropriate place.
   
   Since the install step is also defined in the <code>Makefile</code>, where the software is installed can change based on options passed to the <code>configure</code> script, or things the <code>configure</code> script discovered about your system.
   
   Depending on where the software is being installed, you might need escalated permissions for this step so you can copy files to system directories. Using <code>sudo</code> will often do the trick.

## Where do these scripts come from

All of this works because a <code>configure</code> script examines your system, and uses the information it finds to convert a <code>[Makefile.in](http://Makefile.in)</code> template into a <code>Makefile</code>, but where do the <code>configure</code> script and the <code>[Makefile.in](http://Makefile.in)</code> template come from?

If you’ve ever opened up a <code>configure</code> script, or associated <code>[Makefile.in](http://Makefile.in)</code>, you will have seen that they are thousands of lines of dense shell script. Sometimes these supporting scripts are longer than the source code of the program they install.

Even starting from an existing <code>configure</code> script, it would be very daunting to manually construct one. Don’t worry, though: these scripts aren’t built by hand.

Programs that are built in this way have usually been packaged using a suite of programs collectively referred to as [autotools](http://www.gnu.org/software/automake/manual/html_node/Autotools-Introduction.html#Autotools-Introduction). This suite includes <code>autoconf</code>, <code>automake</code>, and many other programs, all of which work together to make the life of a software maintainer significantly easier. The end user doesn’t see these tools, but they take the pain out of setting up an install process that will run consistently on many different flavours of Unix.
## Hello world

Let’s take a simple “Hello world” C program, and see what it would take to package it with autotools.

Here’s the source of the program, in a file called <code>main.c</code>:
```cpp
#include <stdio.h> 
int main(int argc, char* argv[]) {
    printf("Hello world\n");
    return 0;
}
```
### Creating the configure script

Instead of writing the configure script by hand, we need to create a <code>[configure.ac](http://configure.ac)</code> file written in m4sh—a combination of [m4](http://en.wikipedia.org/wiki/M4_%28computer_language%29) macros and POSIX shell script—to describe what the configure script needs to do.

The first m4 macro we need to call is [<code>AC\_INIT</code>](https://www.gnu.org/software/autoconf/manual/autoconf-2.69/html_node/Initializing-configure.html), which will initialise autoconf and set up some basic information about the program we’re packaging. The program is called <code>helloworld</code>, the version is <code>0.1</code>, and the maintainer is <code>[george@thoughtbot.com](mailto:george@thoughtbot.com)</code>:
```bash
AC_INIT([helloworld], [0.1], [george@thoughtbot.com])
```

We’re going to use <code>automake</code> for this project, so we need to initialise that with the [<code>AM\_INIT\_AUTOMAKE</code>](http://www.gnu.org/software/automake/manual/html_node/Public-Macros.html) macro:
```bash
AM_INIT_AUTOMAKE

```

Next, we need to tell autoconf about the dependencies our configure script needs to look for. In this case, the configure script only needs to look for a C compiler. We can set this up using the [<code>AC\_PROG\_CC</code>](https://www.gnu.org/software/autoconf/manual/autoconf-2.69/html_node/C-Compiler.html) macro:
```bash
AC_PROG_CC
```

If there were other dependencies, then we’d use other m4 macros here to discover them; for example the [<code>AC\_PATH\_PROG</code>](http://www.gnu.org/software/autoconf/manual/autoconf-2.68/html_node/Generic-Programs.html) macro looks for a given program on the user’s <code>PATH</code>.

Now that we’ve listed our dependencies, we can use them. We saw earlier that a typical <code>configure</code> script will use the information it has about the user’s system to build a <code>Makefile</code> from a <code>[Makefile.in](http://Makefile.in)</code> template.

The next line used the [<code>AC\_CONFIG\_FILES</code>](https://www.gnu.org/software/autoconf/manual/autoconf-2.69/html_node/Configuration-Files.html) macro to tell autoconf that the configure script should do just that: it should find a file called <code>[Makefile.in](http://Makefile.in)</code>, substitute placeholders like <code>@PACKAGE\_VERSION@</code> with values like <code>0.1</code>, and write the results to <code>Makefile</code>.
```bash
AC_CONFIG_FILES([Makefile])

```

Finally, having told autoconf everything our configure script needs to do, we can call the [<code>AC\_OUTPUT</code>](http://www.gnu.org/software/autoconf/manual/autoconf-2.69/html_node/Output.html) macro to output the script:
```bash
AC_OUTPUT

```

Here’s the whole thing. Not bad, compared to the 4,737 line <code>configure</code> script it’s going to produce!
```bash
AC_INIT([helloworld], [0.1], [george@thoughtbot.com])
AM_INIT_AUTOMAKE
AC_PROG_CC
AC_CONFIG_FILES([Makefile])
AC_OUTPUT
```

We’re almost ready to package up and distribute our program, but we’re still missing something. Our <code>configure</code> script will expect a <code>[Makefile.in](http://Makefile.in)</code> file that it can substitute all of those system-specific variables into, but so far, we’ve not created that file.
### Creating the Makefile

As with the <code>configure</code> script, the <code>[Makefile.in](http://Makefile.in)</code> template is very long and complex. So instead of writing it by hand, we write a shorter <code>[Makefile.am](http://Makefile.am)</code> file, which <code>automake</code> will use to generated the <code>[Makefile.in](http://Makefile.in)</code> for us.

First, we need to set some options to tell automake about the layout of the project. Since we’re not following the standard layout of a GNU project, we warn automake that this is a [<code>foreign</code>](http://www.gnu.org/software/automake/manual/automake.html#List-of-Automake-options) project:
```bash
AUTOMAKE_OPTIONS = foreign

```

Next, we tell automake that we want the Makefile to build a program called <code>helloworld</code>:
```bash
bin_PROGRAMS = helloworld

```

There’s a lot of information packed into this line, thanks to automake’s [uniform naming scheme](http://www.gnu.org/software/automake/manual/html_node/Uniform.html).

The <code>PROGRAMS</code> suffix is called a primary. It tells automake what properties the <code>helloworld</code> file has. For example, <code>PROGRAMS</code> need to be built, whereas <code>SCRIPTS</code> and <code>DATA</code> files don’t need to be built.

The <code>bin</code> prefix tells automake that the file listed here should be installed to the directory defined by the variable <code>bindir</code>. There are various directories defined for us by autotools—including <code>bindir</code>, <code>libdir</code>, and <code>pkglibdir</code>—but we can also define our own.

If we wanted to install some Ruby scripts as part of our program, we could define a <code>rubydir</code> variable and tell automake to install our Ruby files there:
```bash
rubydir = $(datadir)/ruby
ruby_DATA = my_script.rb my_other_script.rb
```

Additional prefixes can be added before the install directory to further nuance automake’s behaviour.

Since we’ve defined a <code>PROGRAM</code>, we need to tell automake where to find its source files. In this case, the prefix is the name of the program these source files build, rather than the place where they will be installed:
```bash
helloworld_SOURCES = main.c

```

Here’s the whole <code>[Makefile.am](http://Makefile.am)</code> file for our <code>helloworld</code> program. As with the <code>[configure.ac](http://configure.ac)</code> and the <code>configure</code> script, it’s a lot shorter than the <code>[Makefile.in](http://Makefile.in)</code> that it generates:
```bash
AUTOMAKE_OPTIONS = foreign
bin_PROGRAMS = helloworld
helloworld_SOURCES = main.c
```
### Putting it all together

Now we’ve written our config files, we can run autotools and generate the finished <code>configure</code> script and <code>[Makefile.in](http://Makefile.in)</code> template.

First, we need to generate an m4 environment for autotools to use:
```bash
aclocal

```

Now we can run <code>autoconf</code> to turn our <code>[configure.ac](http://configure.ac)</code> into a <code>configure</code> script, and <code>automake</code> to turn our <code>[Makefile.am](http://Makefile.am)</code> into a <code>[Makefile.in](http://Makefile.in)</code>:
```bash
autoconf
automake --add-missing
```
### Distributing the program

The end user doesn’t need to see our autotools setup, so we can distribute the <code>configure</code> script and <code>[Makefile.in](http://Makefile.in)</code> without all of the files we used to generate them.

Fortunately, autotools will help us with distribution too. The Makefile contains all kinds of interesting targets, including one to build a tarball of the project containing all of the files we need to distribute:
```bash
./configure
make dist
```

You can even test that the distribution tarball can be installed under a variety of conditions:
```bash
make distcheck
```
## Overview

Now we know where this incantation comes from and how it works!

On the maintainer’s system:
```bash
aclocal # Set up an m4 environment
autoconf # Generate configure from configure.ac
automake --add-missing # Generate Makefile.in from Makefile.am
./configure # Generate Makefile from Makefile.in
make distcheck # Use Makefile to build and test a tarball to distribute
```

On the end-user’s system:
```bash
./configure # Generate Makefile from Makefile.in
make # Use Makefile to build the program
make install # Use Makefile to install the program
```
