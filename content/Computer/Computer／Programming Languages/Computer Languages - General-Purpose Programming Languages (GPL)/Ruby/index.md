---
title: "Ruby"
created: 2019-03-15T17:16:18.895-05:00
modified: 2026-05-21T19:04:35.217-05:00
parent: "[[Computer Languages - General-Purpose Programming Languages (GPL)]]"
children:
  - "[[Ruby on Rails]]"
---
###### Ruby
````excerpt
- is a dynamic, reflective, object-oriented, general-purpose programming language
- it was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan
````
^excerpt

# IDE
- RubyMine - [https://www.jetbrains.com/ruby/](https://www.jetbrains.com/ruby/)

# Installation

> [!expand]- homebrew
> ###### Search ruby versions via home-brew
> ```
> brew search ruby
> ```
>
> Install ruby using home-brew
> ```
> brew install <ruby version here>
> ```
>
> This would download into <code><font style="color: rgb(122,134,154);">/usr/local/Cellar</font></code> directory
>
> Verify ruby
> ```
> which <ruby version here>
> <ruby version here> -v
> ```
# Command

> [!expand]- open ruby console
> Open ruby console
> ```
> irb
> ```
# Package Manager

> [!expand]- gem
> gem
# ERB

> [!expand]- Click here to expand...
> .erb files are Embedded RuBy files
> # Installation
>
> > [!expand]- homebrew
> > Mac already has the erb command
> # Example Use
>
> > [!expand]- Click here to expand...
> > Running ERB from the Command-line
> > ```
> > erb example.txt.erb > result.txt
> > ```
> >
> > example.txt.erb contents below
> > ```ruby
> > Hello, <%= @name %>.
> > Today is <%= Time.now.strftime('%A') %>.
> > ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Projects
- master example - [https://github.com/TheRealMarcusChiu/RubyMasterExample.git](https://github.com/TheRealMarcusChiu/RubyMasterExample.git)
