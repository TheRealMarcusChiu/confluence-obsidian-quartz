---
title: "OPCache"
created: 2019-03-15T16:36:57.255-05:00
modified: 2019-03-15T16:37:45.992-05:00
parent: "[[PHP Extra Features]]"
children: []
---
[https://www.sitepoint.com/understanding-opcache/](https://www.sitepoint.com/understanding-opcache/)

As each PHP script is being compiled at runtime, a part of the execution time gets used for transforming the human readable code into code that can be understood by the machine. A bytecode cache engine like OpCache, APC or Xcache does it only once – during the first execution of a specific PHP file.
# Installation

> [!expand]- Click here to expand...
> [http://stackoverflow.com/questions/17224798/how-to-use-php-opcache](http://stackoverflow.com/questions/17224798/how-to-use-php-opcache)
>
> OpCache is compiled by default on PHP5.5+. However it is disabled by default. In order to start using OpCache in PHP5.5+ you will first have to enable it. To do this you would have to do the following.
>
> Add the following line to your php.ini:
> <span style="white-space: pre-wrap"><code>zend\_extension=/full/path/to/opcache.so (nix)</code><br><code>zend\_extension=C:\\path\\to\\php\_opcache.dll (win)</code></span>
>
> Note that when the path contains spaces you should wrap it in quotes:
> <span style="white-space: pre-wrap"><code>zend\_extension="C:\\Program Files\\PHP5.5\\ext\\php\_opcache.dll"</code></span>
>
> Also note that you will have to use the zend\_extension directive instead of the "normal" extension directive because it affects the actual Zend engine (i.e. the thing that runs PHP).
# 4 Functions

> [!expand]- Click here to expand...
> [http://stackoverflow.com/questions/17224798/how-to-use-php-opcache](http://stackoverflow.com/questions/17224798/how-to-use-php-opcache)
>
> Currently there are four functions which you can use:
>
> <strong>1. opcache\_get\_configuration():</strong>
>
> Returns an array containing the currently used configuration OpCache uses. This includes all ini settings as well as version information and blacklisted files.
> <span style="white-space: pre-wrap"><code>var\_dump(opcache\_get\_configuration());</code></span>
>
> <strong>2. opcache\_get\_status():</strong>
>
> This will return an array with information about the current status of the cache. This information will include things like: the state the cache is in (enabled, restarting, full etc), the memory usage, hits, misses and some more useful information. It will also contain the cached scripts.
> <span style="white-space: pre-wrap"><code>var\_dump(opcache\_get\_status());</code></span>
>
> <strong>3. opcache\_reset():</strong>
>
> Resets the entire cache. Meaning all possible cached scripts will be parsed again on the next visit.
> <span style="white-space: pre-wrap"><code>opcache\_reset();</code></span>
>
> <strong>4. opcache\_invalidate():</strong>
>
> Invalidates a specific cached script. Meaning the script will be parsed again on the next visit.
> <span style="white-space: pre-wrap"><code>opcache\_invalidate('/path/to/script/to/invalidate.php', true);</code></span>
