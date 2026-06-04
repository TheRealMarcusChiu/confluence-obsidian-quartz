---
title: "vim - display whitespaces as characters"
created: 2020-01-14T12:31:37.062-06:00
modified: 2020-01-14T12:36:12.930-06:00
parent: "[[vi - vim]]"
children: []
---
to show whitespaces
```bash
:set list
```

use in combination with:
```bash
:set listchars=eol:$,nbsp:_,tab:>-,trail:~,extends:>,precedes:<
```
- <strong>eol</strong> - character to show at the end of each line
- <strong>tab</strong> - Two characters to be used to show a tab
- <strong>trail</strong> - character to show for trailing spaces
- <strong>extends</strong> - character to show in the last column when the line continues beyond the right of the screen
- <strong>precedes</strong> - character to show in the first column when the line continues beyond the left of the screen
- <strong>conceal</strong> - character to show in place of concealed text, when conceal level is set to 1
- <strong>nbsp</strong> - character to show for a space
