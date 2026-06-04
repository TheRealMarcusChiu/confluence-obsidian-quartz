---
title: "Java - Spring Util - Ant-Style Paths (AntPathMatcher)"
created: 2021-02-23T17:02:31.350-06:00
modified: 2022-12-22T10:12:27.024-06:00
parent: "[[Java - Spring - Util]]"
children: []
---
# Rules

The mapping matches URLs using the following rules:
- <code><font style="color: rgb(122,134,154);">?</font></code> matches one character
- <code><font style="color: rgb(122,134,154);">\*</font></code> matches zero or more characters
- <code><font style="color: rgb(122,134,154);">\*\*</font></code> matches zero or more 'directories' in a path
- <code><font style="color: rgb(122,134,154);">{spring:\[a-z\]+}</font></code>matches the regexp <code><font style="color: rgb(122,134,154);">\[a-z\]+</font></code> as a path variable named "spring"

# Examples
- <code><font style="color: rgb(122,134,154);">com/t?st.jsp</font></code> - matches com/test.jsp but also <code><font style="color: rgb(122,134,154);">com/tast.jsp</font></code> or <code><font style="color: rgb(122,134,154);">com/txst.jsp</font></code>
- <code><font style="color: rgb(122,134,154);">com/\*.jsp</font></code> - matches all <code><font style="color: rgb(122,134,154);">.jsp</font></code> files in the <code>com</code> directory
- <code><font style="color: rgb(122,134,154);">com/\*\*/test.jsp</font></code> - matches all <code><font style="color: rgb(122,134,154);">test.jsp</font></code> files underneath the <code>com</code> path
- <code><font style="color: rgb(122,134,154);">org/springframework/\*\*/\*.jsp</font></code> - matches all <code><font style="color: rgb(122,134,154);">.jsp</font></code> files underneath the <code><font style="color: rgb(122,134,154);">org/springframework</font></code> path
- <code><font style="color: rgb(122,134,154);">org/\*\*/servlet/bla.jsp</font></code> - matches <code><font style="color: rgb(122,134,154);">org/springframework/servlet/bla.jsp</font></code> but also <code><font style="color: rgb(122,134,154);">org/springframework/testing/servlet/bla.jsp</font></code> and <code><font style="color: rgb(122,134,154);">org/servlet/bla.jsp</font></code>
- <code><font style="color: rgb(122,134,154);">com/{filename:\\\\w+}.jsp</font></code> will match <code><font style="color: rgb(122,134,154);">com/test.jsp</font></code> and assign the value <code><font style="color: rgb(122,134,154);">test</font></code> to the <code><font style="color: rgb(122,134,154);">filename</font></code> variable

# Resources
- [http://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html](http://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html)
