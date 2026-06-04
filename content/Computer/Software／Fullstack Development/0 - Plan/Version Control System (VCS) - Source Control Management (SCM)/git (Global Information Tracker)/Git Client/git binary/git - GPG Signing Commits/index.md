---
title: "git - GPG Signing Commits"
created: 2019-05-30T16:32:47.924-05:00
modified: 2019-05-30T16:47:44.370-05:00
parent: "[[git binary]]"
children: []
---
### Sections
- [[git - GPG Signing Commits|Generating GPG Key]]
- [[git - GPG Signing Commits|Adding The GPG Key to Github Account]]
- [[git - GPG Signing Commits|Signing Git Commits]]

# Generating GPG Key

generate gpg key
```
$ gpg --full-generate-key
```

generate gpg key
```
$ gpg --list-secret-keys --keyid-format LONG
```
# Adding The GPG Key to Github Account

From the list of GPG keys, copy the GPG key ID you'd like to use. In this example, the GPG key ID is <code>3AA5C34371567BD2</code>:
```
$ gpg --list-secret-keys --keyid-format LONG
/Users/hubot/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          Hubot 
ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

Paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is <code>3AA5C34371567BD2</code>:
```
$ gpg --armor --export 3AA5C34371567BD2
# Prints the GPG key ID, in ASCII armor format
```

Copy your GPG key, beginning with <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code> and ending with <code>-----END PGP PUBLIC KEY BLOCK-----</code>

[Add the GPG key to your GitHub account](https://help.github.com/en/articles/adding-a-new-gpg-key-to-your-github-account)
# Signing Git Commits

<font style="color: rgb(255,0,0);">for macOS users</font>, follow [https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0](https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0)

To set your GPG signing key in Git, paste the text below, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is <code>3AA5C34371567BD2</code>
```
$ git config --global user.signingkey 3AA5C34371567BD2
```

When committing changes in your local branch, add the -S flag to the git commit command:
```
$ git commit -S -m your commit message
# Creates a signed commit
```

To configure your Git client to <strong>sign commits by default for a local repository</strong>, in Git versions 2.0.0 and above, run:
```
git config commit.gpgsign true
```

To <strong>sign all commits by default in any local repository on your computer</strong>, run:
```
git config --global commit.gpgsign true
```
