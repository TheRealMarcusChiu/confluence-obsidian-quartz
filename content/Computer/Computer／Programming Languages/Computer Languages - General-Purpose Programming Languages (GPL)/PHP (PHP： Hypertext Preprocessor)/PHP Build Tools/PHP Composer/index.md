---
title: "PHP Composer"
created: 2019-03-15T16:40:32.688-05:00
modified: 2026-05-21T13:14:03.913-05:00
parent: "[[PHP Build Tools]]"
children: []
---
[https://getcomposer.org/](https://getcomposer.org/)

Composer - Dependency Management for PHP - helps you declare, manage and install dependencies of PHP projects.
# Installation

> [!expand]- homebrew
> Install brew/update brew
> ```
> brew update
> brew tap homebrew/dupes
> brew tap homebrew/php
> ```
>
> Install the desired php version in terminal
> ```
> brew install php56
> ```
>
> Install composer
> ```
> brew install composer
> ```
# Commands

> [!expand]- how to use composer
> - [https://getcomposer.org/doc/01-basic-usage.md](https://getcomposer.org/doc/01-basic-usage.md)
> - [https://getcomposer.org/doc/04-schema.md](https://getcomposer.org/doc/04-schema.md)
>
> Create basic composer.json file in current directory
> ```
> composer init
> ```
>
> this would guide you through creating composer.json
> ```
> "require": {
> 	"monolog/monolog": "1.0.*"
>   } 
> ```
>
> Install the dependencies by running composer’s install command
> ```
> 'composer install —no-dev'  # install dependencies from "require" but not from "require-dev"
> 'composer install'          # will install from both
> ```
>
> This would create:
> - a vendor directory in your project with the required libraries and an auto loader used to load them into the project.
> - a composer.lock file
> - a autoload.php file within the /vendor directory
>
> > [!info]
> > Install command checks if a lock file is present, and if there is, it downloads the versions specified there (regardless of what composer.json says) Otherwise, composer will read the dependencies and versions from composer.json and create a lock file
> >
> > Update command will fetch the latest matching versions (according to your composer.json file) and also update the lock file with the new version
>
> Require composers auto loader in to your PHP script with
> ```
> require '/path/to/vendor/autoload.php';
> ```
>
> Optional - Updating packages
> ```
> composer update —no-dev   # update dependencies from "require" but not from "require-dev"
> composer update           # will update from both
> ```

> [!expand]- update v install commands
> composer update will update dependencies specified in composer.json
>
> composer install will install dependencies specified in composer.lock
>
> composer update will:
> - Read composer.json
> - Remove installed packages that are no more required in composer.json
> - Check the availability of the latest versions of your required packages
> - Install the latest versions of your packages
> - Update composer.lock to store the installed packages version
>
> composer install:
> - Read composer.lock file
> - Install the packages specified in the composer.lock file

> [!expand]- composer.json schema
> [https://getcomposer.org/doc/04-schema.md#autoload](https://getcomposer.org/doc/04-schema.md#autoload)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "<strong>'require'</strong>",
>         "bg": "#F4F5F7"
>       },
>       "- Lists packages required by this package"
>     ],
>     [
>       {
>         "content": "<strong>'require-dev'</strong>",
>         "bg": "#F4F5F7"
>       },
>       "- Lists packages required for developing this package, or running tests, etc.\n- Both install or update support the <code>--no-dev</code> option that prevents dev dependencies from being installed."
>     ],
>     [
>       {
>         "content": "<strong>'repositories'</strong>",
>         "bg": "#F4F5F7"
>       },
>       "- By default Composer just uses the packagist repository. By specifying repositories you can get packages from elsewhere."
>     ],
>     [
>       {
>         "content": "<strong>'autoload'</strong>",
>         "bg": "#F4F5F7"
>       },
>       "- Autoload mapping for a PHP autoloader.\n- PSR-4 and PSR-0 autoloading, classmap generation and files includes are supported.\n\t- ‘PSR-4’\n\t\t- /vendor/composer/autoload\\_psr4.php\n\t- ‘PSR-0’\n\t\t- /vendor/composer/autoload\\_namespaces.php\n- ‘classmap’\n\t- /vendor/composer/autoload\\_classmap.php\n\t- You can use the classmap generation support to define autoloading for all libraries that do not follow PSR-0/4. To configure this you specify all directories or files to search for classes.\n- ‘files’\n\t- Use if you want to require certain files explicitly on every request\n\t- This is useful if your package includes PHP functions that are not in a class"
>     ]
>   ]
> }
> ```
