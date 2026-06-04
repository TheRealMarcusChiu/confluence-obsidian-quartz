---
title: "rbash (Restricted Bash)"
created: 2019-12-27T01:52:20.249-06:00
modified: 2019-12-27T01:54:14.572-06:00
parent: "[[UNIX Shell - Implementation Types]]"
children: []
---
### Restricted Shell

If [[bash (Bourne-Again SHell)]] is started with the name <code>rbash</code>, or the --restricted or -r option is supplied at invocation, the shell becomes restricted. A restricted shell is used to set up an environment more controlled than the standard shell. A restricted shell behaves identically to <code>bash</code> with the exception that the following are disallowed or not performed:
- Changing directories with the <code>cd</code> builtin
- Setting or unsetting the values of the <code>SHELL</code>, <code>PATH</code>, <code>ENV</code>, or <code>BASH\_ENV</code> variables
- Specifying command names containing slashes
- Specifying a filename containing a slash as an argument to the <code>.</code> builtin command
- Specifying a filename containing a slash as an argument to the -p option to the <code>hash</code> builtin command
- Importing function definitions from the shell environment at startup
- Parsing the value of <code>SHELLOPTS</code> from the shell environment at startup
- Redirecting output using the ‘\>’, ‘\>|’, ‘\<\>’, ‘\>&’, ‘&\>’, and ‘\>\>’ redirection operators
- Using the <code>exec</code> builtin to replace the shell with another command
- Adding or deleting builtin commands with the -f and -d options to the <code>enable</code> builtin
- Using the <code>enable</code> builtin command to enable disabled shell builtins
- Specifying the -p option to the <code>command</code> builtin
- Turning off restricted mode with ‘set +r’ or ‘set +o restricted’
