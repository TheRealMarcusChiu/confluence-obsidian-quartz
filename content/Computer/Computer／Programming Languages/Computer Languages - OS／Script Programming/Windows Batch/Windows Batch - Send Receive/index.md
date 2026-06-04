---
title: "Windows Batch - Send Receive"
created: 2019-03-15T16:53:45.882-05:00
modified: 2019-03-15T16:54:49.313-05:00
parent: "[[Windows Batch]]"
children: []
---
send.bat
```
@echo off
set /p mood=How are you:  
call Receive.bat %mood% "thats good"
```

receive.bat
```
@echo off
echo %1
echo %2
pause
```
