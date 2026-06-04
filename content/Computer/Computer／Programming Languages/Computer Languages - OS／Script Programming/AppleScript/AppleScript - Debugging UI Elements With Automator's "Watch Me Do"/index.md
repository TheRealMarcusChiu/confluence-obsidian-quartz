---
title: "AppleScript - Debugging UI Elements With Automator's \"Watch Me Do\""
created: 2020-06-26T21:31:53.533-05:00
modified: 2020-06-26T21:53:19.578-05:00
parent: "[[AppleScript]]"
children: []
---
### Problem

Say you want to automate clicking and navigation with [[AppleScript]], but don't know the UI Elements of the window in order to actually do so
### Solution

open the Automator.app, then choose Workflow

![[AppleScript - Debugging UI Elements With Automator's "Watch Me Do"/1.png]]

press record

![[AppleScript - Debugging UI Elements With Automator's "Watch Me Do"/2.png]]

click around what you want automated, then stop recording

![[AppleScript - Debugging UI Elements With Automator's "Watch Me Do"/3.png]]

select all in red above, and copy. then paste into some TextEditor (example of what's copy below)
```text
-- Mouse Clicked
delay 4.117081
set timeoutSeconds to 2.000000
set uiScript to "click image \"LR -3\" of group 1 of scroll area 1 of application process \"Finder\""
my doWithTimeout( uiScript, timeoutSeconds )
...
```

copy the snippet at line 4 and paste into the AppleScript like below (NOTE: un-escape the ")
```applescript
tell application "System Events"
    tell process "Finder"
		click image "LR -3" of group 1 of scroll area 1
    end tell
end tell
```
### Example Scripts
- [[AppleScript - Automate Pointer Actions]]
