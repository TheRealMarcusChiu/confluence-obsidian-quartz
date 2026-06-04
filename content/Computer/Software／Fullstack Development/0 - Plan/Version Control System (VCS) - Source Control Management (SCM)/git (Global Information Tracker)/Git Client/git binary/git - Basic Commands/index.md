---
title: "git - Basic Commands"
created: 2019-05-30T16:31:57.865-05:00
modified: 2021-07-24T08:17:21.539-05:00
parent: "[[git binary]]"
children: []
---
- find the right commands you need without digging through the web - [https://gitexplorer.com/](https://gitexplorer.com/)

[https://git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial) [http://learngitbranching.js.org/](http://learngitbranching.js.org/)
###### <strong>INIT NEW GIT PROJECT</strong>

> [!expand]- Click here to expand...
> git init
> - initializes git project at current directory
>
> git add .
> - tells git to take snapshot of all files in current directory
> - excludes files from .gitignore
> - This snapshot is stored in a temporary staging area which Git calls the “index”
>
> git commit
> - To permanently store contents of the “index” in the repository with
###### <strong>CLONE EXISTING GIT PROJECT</strong>

> [!expand]- Click here to expand...
> git clone [https://github.com/marcuschiukibo/training.git](https://github.com/marcuschiukibo/training.git)
> - gets a copy of repo into current directory
>
> git clone [https://github.com/marcuschiukibo/training.git](https://github.com/marcuschiukibo/training.git) /path
> - gets a copy of repo into path directory
###### <strong>MAKING CHANGES</strong>

> [!expand]- Click here to expand...
> git add file1 file2 file3
> - adds updated file1, file2, and file3 to “index”
>
> git diff —cached
> - to see what is about to be committed
>
> git diff
> - this will show you any changes that you’ve made but not yet added to index
>
> git status
> - get status, any red means it’s not ready to commit
>
> git commit -a
> - finally, commit your changes with
> - does both ‘git add .’ and ‘git commit’ together
###### <strong>MANAGING BRANCHES</strong>

> [!expand]- Click here to expand...
> git branch
> - display all existing branches
>
> git branch branch-name
> - create a branch ‘experimental’
>
> git checkout branch-name
> - switch to another branch
>
> git checkout -b branch-name
> - creates and switch to branch
>
> git branch -d experimental
> - delete the branch
> - this ensures that changes in the experimental branch are already in the current branch
>
> git branch -D crazy-idea
> - this will always delete the branch
>
> git branch branch-name (sha1-commit)
> - creates a new branch ‘branch-name’ that is a copy of current branch up to the specified commit. (stays on current branch)
###### <strong>MERGING BRANCHES AND MERGE CONFLICTS</strong>

> [!expand]- Click here to expand...
> git merge branch-name
> - merge changes made in branch-name into current branch you are on
> - If no merge conflicts, you’re done.
>
> git diff
> - show merge conflicts
>
> resolve the conflicts by editing files, then commit
> <span style="white-space: pre-wrap"><code>  git commit -a (does both ‘git add .’ and ‘git commit’ together)</code></span>
###### <strong>CHECKOUT REMOTE BRANCH THAT DOES NOT EXIST IN LOCAL REPO</strong>

> [!expand]- Click here to expand...
> two ways to actually do it
> 1. git fetch (remote) (rbranch):(lbranch)
>    
>    <span style="white-space: pre-wrap"><code>git checkout \<lbranch\></code></span>
> 2. git checkout —b 17.2 track origin/17.2
> 	- create a new branch named ’17.2’ that tracks ‘origin/17.2’
> 	- MAY NOT WORK so do these steps:
> 		- you need to check your remotes:
> 		  
> 		  <span style="white-space: pre-wrap"><code>git remote -v</code></span>
> 		- make sure origin is fetched:
> 		  
> 		  <span style="white-space: pre-wrap"><code>git fetch origin</code></span>
> 		- see if you do have fetched an origin/master branch
> 		  
> 		  git branch -av
###### <strong>CHECKOUT A PULL-REQUEST FROM GITHUB</strong>

> [!expand]- Click here to expand...
> Fetch a remote PR into your local repo
> <span style="white-space: pre-wrap"><code>git fetch origin pull/\<pull request id\>/head:\<lbranch\></code><br><code>git checkout \<lbranch\></code></span>
###### <strong>UPDATING LOCAL REPO FROM REMOTE REPO</strong>

> [!expand]- Click here to expand...
> - If another person has pushed to the same branch as you, Git won’t be able to push your changes
> - you can fix this by ‘fetching and merging’ the changes made on the remote branch with what changes you made locally
>   
>   <span style="white-space: pre-wrap"><code>git fetch origin                      (fetches updates made from an online repository)</code><br><code>git merge origin branch-name          (merges updates made online with branch-name local work)</code><br><code>git pull origin branch-name           (does both fetch and merge)</code><br><code>git pull origin branch-name —rebase   (pops off local commits, updates the local commit history from remote repo, then apply local commits)</code></span>
