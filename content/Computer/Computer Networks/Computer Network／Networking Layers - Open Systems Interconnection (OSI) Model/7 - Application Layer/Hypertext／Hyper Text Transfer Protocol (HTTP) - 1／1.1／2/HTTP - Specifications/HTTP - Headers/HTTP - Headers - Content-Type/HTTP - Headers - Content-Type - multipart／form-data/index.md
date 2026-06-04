---
title: "HTTP - Headers - Content-Type - multipart／form-data"
created: 2020-01-07T15:51:46.351-06:00
modified: 2020-01-07T23:57:33.260-06:00
parent: "[[HTTP - Headers - Content-Type]]"
children: []
---
In the case of multiple part messages, in which one or more different sets of data are combined in a single body, a "multipart" Content-Type field must appear in the entity's header. The body must then contain one or more "body parts," each preceded by an encapsulation boundary, and the last one followed by a closing boundary. Each part starts with an encapsulation boundary, and then contains a body part consisting of header area, a blank line, and a body area
### Example Multipart Data
```
...
-----------------------------9051914041544843365972754266			# boundary
Content-Disposition: form-data; name="file1"; filename="a.txt"		# header area 1
Content-Type: text/plain											# header area 2
																	# blank line
Content of a.txt.													# body area 1
																	# body area 2
...
```
### Experimenting What Multipart Data/Files Look Like

> [!expand]- Click here to expand...
> Save the form to an <code>index.html</code> file:
> ```
> <form action="http://localhost:8000" method="post" enctype="multipart/form-data">
>   <p><input type="text" name="text" value="text default">
>   <p><input type="file" name="file1">
>   <p><input type="file" name="file2">
>   <p><button type="submit">Submit</button>
> </form>
> ```
>
> Create files to upload:
> ```
> echo 'Content of a.txt.' > a.txt
> echo '<!DOCTYPE html><title>Content of a.html.</title>' > a.html
> ```
>
> Run:
> ```
> nc -l localhost 8000
> ```
>
> Open the index.html on your browser, select the files and click on submit and check the terminal.
>
> <code>nc</code> prints the request received. Firefox sent:
> ```
> POST / HTTP/1.1
> Host: localhost:8000
> User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:29.0) Gecko/20100101 Firefox/29.0
> Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
> Accept-Language: en-US,en;q=0.5
> Accept-Encoding: gzip, deflate
> Cookie: __atuvc=34%7C7; permanent=0; _gitlab_session=226ad8a0be43681acf38c2fab9497240; __profilin=p%3Dt; request_method=GET
> Connection: keep-alive
> Content-Type: multipart/form-data; boundary=---------------------------9051914041544843365972754266
> Content-Length: 554
>
> -----------------------------9051914041544843365972754266
> Content-Disposition: form-data; name="text"
>
> text default
> -----------------------------9051914041544843365972754266
> Content-Disposition: form-data; name="file1"; filename="a.txt"
> Content-Type: text/plain
>
> Content of a.txt.
>
> -----------------------------9051914041544843365972754266
> Content-Disposition: form-data; name="file2"; filename="a.html"
> Content-Type: text/html
>
> <!DOCTYPE html><title>Content of a.html.</title>
>
> -----------------------------9051914041544843365972754266--
> ```
>
> NOTE:
> - in the HTTP request body, the boundary (i.e. -----------------------------9051914041544843365972754266) contains 2 additional '-' than the one defined in the Content-Type Header
> - the last boundary has -- appended at end
>
> Alternatively, cURL should send the same POST request as your a browser form:
> ```
> nc -l localhost 8000
> curl -F "text=default" -F "file1=@a.html" -F "file1=@a.txt" localhost:8000
> ```
### Detailed Explanation

[https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html](https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)
