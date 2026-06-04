---
title: "Python - Installation With Tkinter"
created: 2020-11-18T17:37:58.772-06:00
modified: 2026-05-16T16:55:47.924-05:00
parent: "[[Python - Installation, Managing Versions, and Managing Packages]]"
children: []
---
This article is to make <code><font style="color: rgb(122,134,154);">tkinter</font></code> (a Python binding to the [[TCL／TK (Tickle Tackle)|Tk GUI toolkit]]) work using <code><font style="color: rgb(122,134,154);">pyenv</font></code> on [[Macintosh OSs (Mac OS X) - macOS|macOS]]
# Steps

install <code><font style="color: rgb(128,128,128);">tcl-tk</font></code> with homebrew
```
brew install tcl-tk
```

add the following to <code><font style="color: rgb(128,128,128);">.bashrc</font></code> or <code><font style="color: rgb(128,128,128);">.bash\_profile</font></code> and then reload shell
```
export PATH="$(brew --prefix tcl-tk)/bin:$PATH"
```

if you have the Python version already installed with pyenv then uninstall it with:
```
pyenv uninstall <your python version>
```

set environment variable that will be used by python-build. in shell run (<font style="color: rgb(128,128,128);">NOTE: in future use <code>tck-tk</code> version that actually installed with Homebrew. At the moment of posting <code>8.6</code> was the actual</font>)
```
env \
  PATH="$(brew --prefix tcl-tk)/bin:$PATH" \
  LDFLAGS="-L$(brew --prefix tcl-tk)/lib" \
  CPPFLAGS="-I$(brew --prefix tcl-tk)/include" \
  PKG_CONFIG_PATH="$(brew --prefix tcl-tk)/lib/pkgconfig" \
  CFLAGS="-I$(brew --prefix tcl-tk)/include" \
  PYTHON_CONFIGURE_OPTS="--with-tcltk-includes='-I$(brew --prefix tcl-tk)/include' --with-tcltk-libs='-L$(brew --prefix tcl-tk)/lib -ltcl8.6 -ltk8.6'"
```

finally reinstall Python
```
pyenv install <version>
```
# Test
```
python -m tkinter -c "tkinter._test()"
```

you should see a test window
