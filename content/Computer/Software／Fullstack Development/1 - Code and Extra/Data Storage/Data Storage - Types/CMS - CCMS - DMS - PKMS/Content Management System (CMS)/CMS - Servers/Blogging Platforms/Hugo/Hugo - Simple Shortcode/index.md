---
title: "Hugo - Simple Shortcode"
created: 2025-06-04T18:10:44.404-05:00
modified: 2025-06-04T18:11:03.651-05:00
parent: "[[Hugo]]"
children: []
---
```
{{ $array := split (.Get "data") "," }}
{{ range $array }}
    {{ $item := split . "|"}}
    {{ $image := index $item 0 }}
    {{ $alt := index $item 1 }}
    <img src="{{$image}}" alt="{{$alt}}">
{{ end }}
```
