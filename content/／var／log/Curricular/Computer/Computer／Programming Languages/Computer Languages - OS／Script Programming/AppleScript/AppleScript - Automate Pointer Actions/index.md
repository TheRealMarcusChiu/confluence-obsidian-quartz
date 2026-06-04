---
title: "AppleScript - Automate Pointer Actions"
created: 2020-06-26T03:52:20.683-05:00
modified: 2020-06-26T04:02:48.211-05:00
parent: "[[AppleScript]]"
children: []
---
see: [https://github.com/TheRealMarcusChiu/apple-script-auto-toggle-pointer-actions](https://github.com/TheRealMarcusChiu/apple-script-auto-toggle-pointer-actions)
```
tell application "System Preferences"
	activate
	reveal anchor "Mouse" of pane id "com.apple.preference.universalaccess"
	--	get every anchor of current pane
end tell

tell application "System Events"
	tell process "System Preferences"
		repeat until window "Accessibility" exists
		end repeat
		click radio button "Alternate Control Methods" of tab group 1 of group 1 of window "Accessibility"
		click checkbox "Enable alternate pointer actions" of tab group 1 of group 1 of window "Accessibility"
		try
			click UI element "OK" of sheet 1 of window "Accessibility"
		on error errMsg
			-- display dialog "ERROR: " & errMsg
		end try
	end tell
	keystroke "h" using command down
end tell
```
