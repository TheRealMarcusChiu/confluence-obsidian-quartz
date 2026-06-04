---
title: "Java - IdentityHashMap"
created: 2021-10-10T02:55:49.710-05:00
modified: 2022-06-05T18:50:31.249-05:00
parent: "[[Java - Map (Associative Array)]]"
children: []
---
<code><font style="color: rgb(0,51,179);">public class </font>IdentityHashMap\<<font style="color: rgb(0,126,138);">K</font>,<font style="color: rgb(0,126,138);">V</font>\> <font style="color: rgb(0,51,179);">extends </font>AbstractMap\<<font style="color: rgb(0,126,138);">K</font>,<font style="color: rgb(0,126,138);">V</font>\> <font style="color: rgb(0,51,179);">implements </font>Map\<<font style="color: rgb(0,126,138);">K</font>,<font style="color: rgb(0,126,138);">V</font>\>, [java.io](http://java.io).Serializable, Cloneable</code>
- uses reference equality (i.e. <code><font style="color: rgb(122,134,154);">keyObject1 == keyObject2</font></code>) rather than <code><font style="color: rgb(122,134,154);">keyObject1.equals(keyObject2)</font></code>
- for hashing, <code><font style="color: rgb(122,134,154);">System.identityHashCode(keyObject)</font></code> is invoked rather than <code><font style="color: rgb(122,134,154);">keyObject.hashCode()</font></code>
