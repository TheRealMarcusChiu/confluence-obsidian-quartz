---
title: "w3m"
created: 2019-12-30T17:25:39.904-06:00
modified: 2025-06-17T13:00:30.309-05:00
parent: "[[Web (HTTP) Clients／Browsers]]"
children: []
---
###### w3m
````excerpt
- is a text-based [[Web (HTTP) Clients／Browsers|web browser]]
````
^excerpt

# Installation
```
brew install gdk-pixbuf
brew install xquartz
brew install imlib2
ln -s /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk/System/Library/Frameworks/Tk.framework/Headers/X11 /usr/local/include/X11
git clone https://github.com/tats/w3m
cd w3m
./configure --enable-image --with-ssl=/usr/local/opt/openssl --with-imagelib=imlib2
sudo make
```
