---
title: "Python - Managing Versions & Virtual Environments"
created: 2019-08-18T16:48:05.432-05:00
modified: 2026-02-25T02:41:47.554-06:00
parent: "[[Python - Installation, Managing Versions, and Managing Packages]]"
children:
  - "[[pipenv]]"
  - "[[uv]]"
---
- <strong>multiple python installation </strong>- multiple installations of different Python versions on the same machine
- <strong>virtual environments</strong> - independent environments containing Python packages of specific versions. this allows different versions of the same package to be installed on different virtual environments

3 tools for working with these, and when you might need each one:

```merge-table
{
  "rows": [
    [
      {
        "content": "python tool",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "manages multiple python versions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "manages virtual environments",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "venv/pyvenv (<font style=\"color: rgb(255,0,0);\">DEPRECATED</font>)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "pyenv",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      }
    ],
    [
      {
        "content": "pyenv-virtualenv",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "red",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "green",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[pipenv]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "TODO",
        "align": "center"
      },
      {
        "content": "TODO",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[uv]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 70.7893%;"
}
```

pyenv & pyenv-virtualenv is often used together
# venv

> [!expand]- Click here to expand...
> From Python 3.3+ the <code>venv</code> package is included. It is ideal for creating lightweight virtual environments.
>
> Up until Python 3.6 a script called <code>pyvenv</code> was also included as a wrapper around <code>venv</code>, but this has been [deprecated](https://docs.python.org/3/library/venv.html). It will be completely removed in Python 3.8. The exact same functionality is available when using <code>venv</code>, and any existing documentation should be updated. For anyone interested you can read [the reasons behind depreciating <code>pyvenv</code>](https://bugs.python.org/issue25154).
>
> <code>venv</code> is used to create a new environment via the terminal command:
> <span style="white-space: pre-wrap"><code>\$ python3 -m venv directory-name-to-create</code></span>
>
> activated with:
> <span style="white-space: pre-wrap"><code>\$ <font style="color: rgb(221,74,104);">source</font> name-given/bin/activate</code></span>
>
> and deactivated with simply:
> <span style="white-space: pre-wrap"><code>\$ deactivate</code></span>
>
> If you need to remove the environment completely after deactivating it, you can run:
> <span style="white-space: pre-wrap"><code>\$ <font style="color: rgb(221,74,104);">rm</font> -r name-given</code></span>
>
> By default, the environment it creates will be the current version of Python you are using. If you are writing documentation, and want the additional safety that the correct version of Python is being used by your reader you can specify the major and minor version number in the command, like so:
> <span style="white-space: pre-wrap"><code>\$ python3.6 -m venv example-three-six</code></span>
>
> If the reader is using a version other than 3.6 then the command will not be successful and will indicate in its error message. However, any patch version (for example 3.6.4) will work.
>
> When the environment is active, any packages can be installed to it via <code>[pip](https://pip.pypa.io/en/stable/installing/#installation)</code> as normal. By default, the newly created environment will <strong>not</strong> include any packages already installed on the machine. As <code>pip</code> itself will not necessarily be installed on the machine. It is recommended to first upgrade <code>pip</code> to the latest version, using <code>pip install --upgrade pip</code>.
>
> Projects will commonly have a <code>requirements.txt</code> file specifying its dependencies. This allows the shortcut command <code>pip install -r requirements.txt</code> command to quickly install all packages to the newly created virtual environment. They will only exist in the virtual environment. It will not be available when it is deactivated but will persist when it is reactivated.
>
> If you do not need to use additional versions of Python itself, then this is all you need to create isolated, project specific, virtual environments.
# [pyenv](https://github.com/pyenv/pyenv)

> [!expand]- Click here to expand...
> If you wish to use multiple versions of Python on a single machine, then <code>pyenv</code> is a commonly used tool to install and switch between versions. This is not to be confused with the previously mentioned depreciated <code>pyvenv</code> script. It does not come bundled with Python and must be installed separately.
>
> The <code>[pyenv](https://github.com/pyenv/pyenv)</code>[documentation](https://github.com/pyenv/pyenv) includes a great description of [how it works](https://github.com/pyenv/pyenv#how-it-works), so here we will look simply at how to use it.
>
> Firstly we will need to install it. If using Mac OS X, we can do this using Homebrew, else consider [other installation options](https://github.com/pyenv/pyenv#installation).
> <span style="white-space: pre-wrap"><code>\$ brew update</code><br><code>\$ brew <font style="color: rgb(221,74,104);">install</font> pyenv</code></span>
>
> Next, add the following towards the bottom of your shell scripts to allow <code>pyenv</code> to automatically change versions for you:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(221,74,104);">eval</font> <font style="color: rgb(102,153,0);">"<font style="color: rgb(238,153,0);">\$(pyenv init -)</font>"</font></code></span>
>
> To do, open your [in use shell](https://askubuntu.com/questions/590899/how-to-check-which-shell-am-i-using) script, via <code>\$ \~/.zshrc</code>, <code>\$ \~/.bashrc</code> or <code>\$ \~/.bash\_profile</code> and copy and paste the above line in.
>
> Running <code>pyenv versions</code> will show which Python versions are currently installed, with a <code>\*</code> next to the one currently in use. <code>pyenv version</code> shows this directly, and <code>python --version</code> can be used to verify this.
>
> To install an additional version, say <code>3.4.0</code>, simply use <code>pyenv install 3.4.0</code>.
>
> <code>pyenv</code> looks in four places to decide which version of Python to use, in priority order:
> 1. The <code>PYENV\_VERSION</code> environment variable (if specified). You can use the <code>[pyenv shell](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-shell)</code> command to set this environment variable in your current shell session.
> 2. The application-specific <code>.python-version</code> file in the current directory (if present). You can modify the current directory's <code>.python-version</code> file with the <code>[pyenv local](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-local)</code> command.
> 3. The first <code>.python-version</code> file found (if any) by searching each parent directory, until reaching the root of your filesystem.
> 4. The global version file. You can modify this file using the <code>[pyenv global](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-global)</code> command. If the global version file is not present, pyenv assumes you want to use the "system" Python. (In other words, whatever version would run if pyenv weren't in your <code>PATH</code>.)
>
> When setting up a new project that is to use Python 3.6.4 then <code>pyenv local 3.6.4</code> would be ran in its root directory. This would both set the version, and create a <code>.python-version</code> file, so that other contributors’ machines would pick it up.
>
> The [full description of <code>pyenv</code> commands](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md) is one to bookmark.
# pyenv and venv

> [!expand]- Click here to expand...
> When working with Python 3.3+ we now know both how to install and switch between different versions of Python, and how to create new virtual environments.
>
> As an example, let’s say we were setting up a project that was to use Python 3.4.
>
> First we could set our local version using <code>pyenv local 3.4.0</code>.
>
> If we then ran <code>python3 -m venv example-project</code> a new virtual environment would be set up under <code>example-project</code>, using our locally enabled Python 3.4.0.
>
> We activate using <code>source example-project/bin/activate</code> and can start working.
>
> Next we could <em>optionally</em> document that a collaborator should use <code>python3.4 -m venv \<name\></code>. This means even if a collaborator was not using pyenv the <code>python3.4</code> command would error if their Python version was not the same major and minor version (3 and 4), as we intended.
>
> Alternatively, we could choose to simply specify that 3.4.0 was to be used, and instruct <code>python3 -m venv \<name\></code>. If we believe that any ve<em>rsion g</em>reater than 3.4 is acceptable, then we also may choose to use <code>python3</code> over <code>python3.4</code>, as if the collaborator was using 3.6 then they would otherwise also receive an error. This is a project specific decision.
# pyenv-virtualenv

> [!expand]- Click here to expand...
> <code>pyenv</code> can be used to install both Python 2 and 3 versions. However, as we have seen, <code>venv</code> is limited to versions of Python greater than 3.3.
>
> <code>pyenv-virtualenv</code> is a tool to create virtual environments integrated with <code>pyenv</code>, and works for all versions of Python. It is still recommended to use the official Python <code>venv</code> where possible. But if, for example, you’re creating a virtual environment based on <code>2.7.13</code>, then this compliments <code>pyenv</code>.
>
> It also works well with [Anaconda and Miniconda](https://conda.io/docs/glossary.html#anaconda-glossary) <code>conda</code> environments if you are already using those. A tool called <code>virtualenv</code> also exists. It’s not covered here, but it’s linked at the end.
>
> After installing <code>pyenv</code> it can next be installed using Homebrew ([or alternatives](https://github.com/pyenv/pyenv-virtualenv)) as so:
> <span style="white-space: pre-wrap"><code>\$ brew <font style="color: rgb(221,74,104);">install</font> pyenv-virtualenv</code></span>
>
> Next in your <code>.zshrc</code>, <code>.bashrc</code>, or <code>.bash\_profile</code> (depending on which shell you use) add the following towards the bottom:
> <span style="white-space: pre-wrap"><code><font style="color: rgb(221,74,104);">eval</font> <font style="color: rgb(102,153,0);">"<font style="color: rgb(238,153,0);">\$(pyenv init -)</font>"</font><font style="color: rgb(221,74,104);">eval</font> <font style="color: rgb(102,153,0);">"<font style="color: rgb(238,153,0);">\$(pyenv virtualenv-init -)</font>"</font></code></span>
>
> This allows <code>pyenv</code> to activate and deactivate environments automatically when moving directories.
>
> To create a new virtual environment, use:
> <span style="white-space: pre-wrap"><code>\$ pyenv virtualenv <font style="color: rgb(154,110,58);">\<</font>version<font style="color: rgb(154,110,58);">\></font> <font style="color: rgb(154,110,58);">\<</font>name-to-give-it<font style="color: rgb(154,110,58);">\></font></code><br><code>// <font style="color: rgb(0,119,170);">for</font> example</code><br><code>\$ pyenv virtualenv 2.7.10 my-virtual-env-2.7.10 </code></span>
>
> <span style="white-space: pre-wrap"><code>// this would create a virtual env directory in \$(pyenv root)/versions/{version}/envs</code></span>
>
> Existing environments can be listed with:
> <span style="white-space: pre-wrap"><code>\$ pyenv virtualenvs</code></span>
>
> Activated/ deactivated with:
> <span style="white-space: pre-wrap"><code>\$ pyenv activate <font style="color: rgb(154,110,58);">\<</font>name<font style="color: rgb(154,110,58);">\></font></code><br><code>\$ pyenv deactivate</code></span>
>
> At the time of writing, when using <code>activate</code> the warning <code>prompt changing will be removed from future release</code> will be displayed. This is [expected](https://github.com/pyenv/pyenv-virtualenv/issues/135#issuecomment-386154344) and refers only to the <code>(env-name)</code> being displayed in your shell, not the use of the <code>activate</code> command itself.
>
> Installing requirements works as described in <code>venv</code>. Unlike in <code>venv</code> a <code>rm -r</code> command is not needed to remove an environment, an <code>[uninstall](https://github.com/pyenv/pyenv-virtualenv#delete-existing-virtualenv)</code>[command](https://github.com/pyenv/pyenv-virtualenv#delete-existing-virtualenv)exists.
