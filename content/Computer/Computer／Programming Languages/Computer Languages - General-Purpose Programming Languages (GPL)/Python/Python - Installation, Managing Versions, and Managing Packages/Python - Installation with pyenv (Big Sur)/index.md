---
title: "Python - Installation with pyenv (Big Sur)"
created: 2020-11-18T19:09:50.657-06:00
modified: 2020-11-18T19:14:33.012-06:00
parent: "[[Python - Installation, Managing Versions, and Managing Packages]]"
children: []
---
```
brew install zlib openssl readline tcl-tk
```
```
export LDFLAGS="${LDFLAGS} -L$(brew --prefix zlib)/lib"
export LDFLAGS="${LDFLAGS} -L$(brew --prefix openssl)/lib"
export LDFLAGS="${LDFLAGS} -L$(brew --prefix readline)/lib"
export LDFLAGS="${LDFLAGS} -L$(xcrun --show-sdk-path)/usr/lib"
export LDFLAGS="${LDFLAGS} -L$(brew --prefix tcl-tk)/lib"

export CFLAGS="${CFLAGS} -I$(brew --prefix zlib)/include"
export CFLAGS="${CFLAGS} -I$(brew --prefix openssl)/include"
export CFLAGS="${CFLAGS} -I$(brew --prefix readline)/include"
export CFLAGS="${CFLAGS} -I$(xcrun --show-sdk-path)/usr/include"
export CFLAGS="${CFLAGS} -I$(brew --prefix tcl-tk)/include"

export CPPFLAGS="${CPPFLAGS} -I$(brew --prefix zlib)/include"
export CPPFLAGS="${CPPFLAGS} -I$(brew --prefix openssl)/include"
export CPPFLAGS="${CPPFLAGS} -I$(brew --prefix readline)/include"
export CPPFLAGS="${CPPFLAGS} -I$(xcrun --show-sdk-path)/usr/include"
export CPPFLAGS="${CPPFLAGS} -I$(brew --prefix tcl-tk)/include"

export PKG_CONFIG_PATH="${PKG_CONFIG_PATH} $(brew --prefix zlib)/lib/pkgconfig"
export PKG_CONFIG_PATH="${PKG_CONFIG_PATH} $(brew --prefix tcl-tk)/lib/pkgconfig"

export PYTHON_CONFIGURE_OPTS="${PYTHON_CONFIGURE_OPTS} --with-tcltk-includes='-I$(brew --prefix tcl-tk)/include' --with-tcltk-libs='-L$(brew --prefix tcl-tk)/lib -ltcl8.6 -ltk8.6'"
```
```
pyenv uninstall (version)
pyenv install (version)
```
