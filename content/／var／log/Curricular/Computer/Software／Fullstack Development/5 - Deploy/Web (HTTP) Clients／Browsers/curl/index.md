---
title: "curl"
created: 2019-03-16T22:40:10.663-05:00
modified: 2021-09-11T22:55:27.472-05:00
parent: "[[Web (HTTP) Clients／Browsers]]"
children:
  - "[[curl - HTTP Authorization Header]]"
  - "[[curl - Show Just The Response Headers and Body]]"
  - "[[curl - go through proxy]]"
---
# Installation

> [!expand]- homebrew
> [http://conqueringthecommandline.com/book/curl](http://conqueringthecommandline.com/book/curl)
>
> <strong>1. install/update curl on mac using brew on terminal</strong>
> ```
>   brew install curl
> ```
>
> <strong>2. simple test</strong>
> ```
>   curl https://www.google.com
> ```
# Commands

> [!expand]- Click here to expand...
> [http://conqueringthecommandline.com/book/curl](http://conqueringthecommandline.com/book/curl)
>
> <strong>1. simple test</strong>
> ```
>   curl https://www.google.com
> ```
>
> <strong>2. with info (-i)</strong>
> ```
>   curl -i https://www.google.com
> ```
>
> <strong>3. following redirects (-L)</strong>
> ```
>   curl quiet-waters-1228.herokuapp.com/redirectme
>   curl -L quiet-waters-1228.herokuapp.com/redirectme
> ```
>
> <strong>4. downloading files (-O)</strong>
> ```
>   curl http://quiet-waters-1228.herokuapp.com/assets/image.jpg
>   curl -O http://quiet-waters-1228.herokuapp.com/assets/image.jpg
> ```
>
> will save be saved into file named image.jpg
>
> <strong>5. Custom file names (-o)</strong>
> ```
>   curl -0 custom_name.jpg http://quiet-waters-1228.herokuapp.com/assets/image.jpg
> ```
>
> <strong>6. changing HTTP request method (-X)</strong>
> ```
>   curl -i -X POST https://httpbin.org/post
>   curl -i -X GET https://httpbin.org/get
> ```
>
> and so on ...
> ```
>   sending parameters
>   curl -i -X GET https://httpbin.org/get?hello=world
> ```
>
> <strong>7. passing data in a request body (-d)</strong>
> ```
>   curl -i -X POST https://httpbin.org/post -d "hello=world&jesus=christ"
> ```
>
> using file for request body (file name prefixed with @)
> ```
>   curl -X POST https://httpbin.org/post -d @form_data.json
> ```
>
> <strong>8. setting headers (-H)</strong>
> ```
>   curl -X POST https://httpbin.org/post -d @form_data.json -H "Accept: application/json"
> ```
>
> <strong>9. basic http authentication (-u)</strong>
> ```
>   curl -i -X POST quiet-waters-1228.herokuapp.com/login
>   curl -X POST -u "user1:password1" quiet-waters-1228.herokuapp.com/login
> ```
>
> <strong>10. saving and sending cookies/headers (-D, -b)</strong>
>
> <strong>11. cookie jar (-c)</strong>
> ```
>    curl -X POST -c cookies.txt -u "user1:password1" quiet-waters-1228.herokuapp.com/login
>    saves cookies into cookies.txt
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
