---
title: "Base64url Notation"
created: 2021-09-13T05:25:00.134-05:00
modified: 2023-08-24T16:09:44.814-05:00
parent: "[[Numeral／Numerical／Number Systems／Representations／Notations]]"
children: []
---
###### Base64url
````excerpt
- is a variant of the [[Base64 Notation]] standard where:
	- where the '<code>+</code>' and '<code>/</code>' characters of are respectively replaced by '<code>-</code>' and '<code>\_</code>', so that using URL encoders/decoders is no longer necessary and has no impact on the length of the encoded value, leaving the same encoded form intact for use in relational databases, web forms, and object identifiers in general
	- allow or require omitting the padding '<code>=</code>' signs to avoid them being confused with field separators, or require that any such padding be percent-encoded. Some libraries will encode '<code>=</code>' to '<code>.</code>', potentially exposing applications to relative path attacks when a folder name is encoded from user data.
````
^excerpt

# Encoding

convert <code><font style="color: rgb(128,128,128);">data-to-be-converted</font></code> into base64url
```
echo "data-to-be-converted" | base64 | sed 's/+/-/g; s/\//_/g'

ZGF0YS10by1iZS1jb252ZXJ0ZWQK
```
