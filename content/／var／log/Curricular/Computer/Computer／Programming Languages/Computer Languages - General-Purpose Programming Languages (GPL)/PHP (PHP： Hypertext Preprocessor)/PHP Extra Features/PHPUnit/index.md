---
title: "PHPUnit"
created: 2019-03-15T16:38:15.062-05:00
modified: 2019-03-15T16:39:03.838-05:00
parent: "[[PHP Extra Features]]"
children: []
---
[https://phpunit.de/](https://phpunit.de/)

PHPUnit is a programmer-oriented testing framework for PHP. It is an instance of the xUnit architecture for unit testing frameworks.
# Installation

> [!expand]- homebrew
> <strong>1. See what versions brew has</strong>
> <span style="white-space: pre-wrap"><code>  brew search phpunit</code></span>
>
> <strong>2. Install that specific version of phpunit</strong>
> <span style="white-space: pre-wrap"><code>  brew install phpunit@5.7</code></span>
>
> <strong>3. Verify phpunit was installed</strong>
> <span style="white-space: pre-wrap"><code>  phpunitat57 —version</code></span>
# Commands

> [!expand]- Click here to expand...
> [https://phpunit.de/getting-started.html](https://phpunit.de/getting-started.html)
>
> <strong>1. run phpunit test class</strong>
> <span style="white-space: pre-wrap"><code>phpunit --bootstrap src/Email.php tests/EmailTest</code></span>
>
> - phpunit - invokes the PHPUnit command-line test runner. We assume that you have downloaded phpunit.phar (see above) and put it into your \$PATH as phpunit.
> - --bootstrap src/Email.php - instructs the PHPUnit command-line test runner to include src/Email.php before the test execution.
> - Usually, though, you use --bootstrap to instruct the PHPUnit command-line test runner to include bootstrap script that sets up autoloading for the classes that are to be tested. Such a script is commonly generated using tools such as Composer or phpab.
> - tests/EmailTest - instructs the PHPUnit command-line test runner to execute the tests of the EmailTest class that is declared in tests/EmailTest.php.
> - Using tests instead of tests/EmailTest would instruct the PHPUnit command-line test runner to execute all tests found declared in \*Test.php source code files in the tests directory.
>
> <strong>2. for alternative output</strong>
> <span style="white-space: pre-wrap"><code>  phpunit --bootstrap src/Email.php --testdox tests</code></span>
