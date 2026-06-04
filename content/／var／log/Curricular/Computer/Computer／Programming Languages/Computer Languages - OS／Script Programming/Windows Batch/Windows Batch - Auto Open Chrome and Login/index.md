---
title: "Windows Batch - Auto Open Chrome and Login"
created: 2019-03-15T16:55:09.131-05:00
modified: 2019-03-15T16:56:07.434-05:00
parent: "[[Windows Batch]]"
children: []
---
run.bat
```
start chrome.exe
echo start chrome.exe gmail.com
 
start test.vbs
```

test.vbs
```
set WshShell = WScript.CreateObject("WScript.Shell")
 
WScript.Sleep 2000
WshShell.SendKeys "marcuschiu9"
WScript.Sleep 1000
WshShell.SendKeys "{TAB}"
WScript.Sleep 1000
WshShell.SendKeys "Google0518$#"
WshShell.SendKeys "{TAB}"
WScript.Sleep 1000
WshShell.SendKeys "{ENTER}"
WScript.Quit()
```
