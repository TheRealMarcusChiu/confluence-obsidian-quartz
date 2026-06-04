---
title: "PHP Symphony"
created: 2019-03-15T16:46:19.359-05:00
modified: 2019-03-15T16:47:54.681-05:00
parent: "[[PHP Example Projects]]"
children: []
---
[https://symfony.com/](https://symfony.com/)

PHP framework for web projects
# Installation

> [!expand]- macOS
> [https://dab.io/getting-started-with-symfony-on-yosemite.html](https://dab.io/getting-started-with-symfony-on-yosemite.html)
>
> <strong>1. install xcode</strong>
> <span style="white-space: pre-wrap"><code>  xcode-select —install</code></span>
>
> <strong>2. install homebrew</strong>
> <span style="white-space: pre-wrap"><code>  \$ ruby -e "\$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/master/install](https://raw.githubusercontent.com/Homebrew/install/master/install))"</code></span>
>
> <strong>3. optional, install MariaDB</strong>
> <span style="white-space: pre-wrap"><code>  brew install mariadb</code></span>
>
> <strong>4. use composer to install composer?</strong>
> <span style="white-space: pre-wrap"><code>  cd</code><br><code>  curl -sS [https://getcomposer.org/installer](https://getcomposer.org/installer) | php</code><br><code>  mv composer.phar /usr/local/bin/composer</code></span>
>
> <strong>5. install Symphony</strong>
> <span style="white-space: pre-wrap"><code>  composer create-project symfony/framework-standard-edition symfony/ “2.5.\*”</code></span>
>
> <strong>6. set the write permissions to the log/ and cache/ directories</strong>
> <span style="white-space: pre-wrap"><code>  cd symfony</code><br><code>  chmod 0777 app/{cache,logs}</code><br><code>  chmod +a "\`whoami\` allow delete,write,append,file\_inherit,directory\_inherit" app/{cache,logs}</code></span>
>
> or replace <code>whom</code> with your username (which can be found with the command whoami)
>
> <strong>7. start the builtin web server and open your browser at localhost:8000/config.php</strong>
> <span style="white-space: pre-wrap"><code>  php app/console server:run</code></span>
# Example Project
- Silex Twig Symphony - [https://github.com/TheRealMarcusChiu/PHPSilexTwigSymphony.git](https://github.com/TheRealMarcusChiu/PHPSilexTwigSymphony.git)
