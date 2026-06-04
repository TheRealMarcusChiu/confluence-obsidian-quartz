---
title: "Windows Batch - Chatroom"
created: 2019-03-15T16:56:26.466-05:00
modified: 2019-03-15T16:58:15.717-05:00
parent: "[[Windows Batch]]"
children: []
---
LogOnToChat.bat
```
@echo off
 
:start
 
cls
 
echo -create (create password)
 
echo -check (check password)
 
echo.
 
set /p PROGRAM= What do you want to do?: 
 
goto %Program%
 
 
 
 
 
:create
 
cls
 
set /p PASSWORD= what is you password?: 
 
echo %PASSWORD%  > test.txt
 
pause
 
goto start
 
 
 
 
 
 
:check
 
cls
 
set /p PASSWORD1= what is your passwrod? 
 
 
 
for /f "Delims=" %%a in (test.txt) do (
 
set TEXT=%%a
 
)
 
 
 
if %PASSWORD1%==%TEXT% goto correct
 
echo you are wrong!!!!
 
pause
 
goto start
 
 
 
:correct 
 
echo you are right!!!
 
pause
 
goto start
```

password\_check.bat
```
@echo off
 
:start
 
cls
 
echo -create (create password)
 
echo -check (check password)
 
echo.
 
set /p PROGRAM= What do you want to do?: 
 
goto %Program%
 
 
 
 
 
:create
 
cls
 
set /p PASSWORD= what is you password?: 
 
echo %PASSWORD%  > test.txt
 
pause
 
goto start
 
 
 
 
 
 
:check
 
cls
 
set /p PASSWORD1= what is your passwrod? 
 
 
 
for /f "Delims=" %%a in (test.txt) do (
 
set TEXT=%%a
 
)
 
 
 
if %PASSWORD1%==%TEXT% goto correct
 
echo you are wrong!!!!
 
pause
 
goto start
 
 
 
:correct 
 
echo you are right!!!
 
pause
 
goto start
```
