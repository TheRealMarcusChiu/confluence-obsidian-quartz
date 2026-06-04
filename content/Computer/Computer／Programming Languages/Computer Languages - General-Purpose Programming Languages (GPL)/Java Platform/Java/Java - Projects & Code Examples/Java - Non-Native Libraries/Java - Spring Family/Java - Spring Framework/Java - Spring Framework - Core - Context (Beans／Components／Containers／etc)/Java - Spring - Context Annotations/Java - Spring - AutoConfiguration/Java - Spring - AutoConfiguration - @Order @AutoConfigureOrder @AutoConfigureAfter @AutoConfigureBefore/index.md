---
title: "Java - Spring - AutoConfiguration - @Order @AutoConfigureOrder @AutoConfigureAfter @AutoConfigureBefore"
created: 2022-08-23T22:05:56.306-05:00
modified: 2022-08-23T22:32:03.087-05:00
parent: "[[Java - Spring - AutoConfiguration]]"
children: []
---
- <code><font style="color: rgb(187,181,41);">@Order<font style="color: rgb(0,51,102);">(Ordered.</font><font style="color: rgb(152,118,170);">HIGHEST\_PRECEDENCE</font><font style="color: rgb(0,51,102);">)</font></font></code>
- <code><font style="color: rgb(187,181,41);">@AutoConfigureOrder</font>(Ordered.<font style="color: rgb(187,181,41);"><font style="color: rgb(152,118,170);">HIGHEST\_PRECEDENCE</font></font>)</code>
- <code><font style="color: rgb(187,181,41);">@AutoConfigureAfter<font style="color: rgb(0,51,102);">(DataSourceAutoConfiguration.class</font><font style="color: rgb(0,51,102);">)</font></font></code>
- <code><font style="color: rgb(187,181,41);">@AutoConfigureBefore<font style="color: rgb(0,51,102);">(DataSourceAutoConfiguration.class</font><font style="color: rgb(0,51,102);">)</font></font></code>
