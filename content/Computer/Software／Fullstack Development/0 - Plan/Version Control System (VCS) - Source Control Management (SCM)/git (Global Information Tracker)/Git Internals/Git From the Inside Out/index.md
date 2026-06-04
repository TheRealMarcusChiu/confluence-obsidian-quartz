---
title: "Git From the Inside Out"
created: 2023-03-28T16:14:17.554-05:00
modified: 2023-03-28T16:30:22.523-05:00
parent: "[[Git Internals]]"
children: []
---
original article: [https://codewords.recurse.com/issues/two/git-from-the-inside-out](https://codewords.recurse.com/issues/two/git-from-the-inside-out)

This essay explains how Git works. It assumes you understand Git well enough to use it to version control your projects.

The essay focuses on the graph structure that underpins Git and the way the properties of this graph dictate Git’s behavior. Looking at fundamentals, you build your mental model on the truth rather than on hypotheses constructed from evidence gathered while experimenting with the API. This truer model gives you a better understanding of what Git has done, what it is doing, and what it will do.

The text is structured as a series of Git commands run on a single project. At intervals, there are observations about the graph data structure that Git is built on. These observations illustrate a property of the graph and the behavior that this property produces.

After reading, if you wish to go even deeper into Git, you can look at the [heavily annotated source code](http://gitlet.maryrosecook.com/docs/gitlet.html) of my implementation of Git in JavaScript.
## Create the project
<span style="white-space: pre-wrap"><code>\~ \$ mkdir alpha</code><br><code>\~ \$ cd alpha</code></span>

The user creates <code>alpha</code>, a directory for their project.
<span style="white-space: pre-wrap"><code>\~/alpha \$ mkdir data</code><br><code>\~/alpha \$ printf 'a' \> data/letter.txt</code></span>

They move into the <code>alpha</code> directory and create a directory called <code>data</code>. Inside, they create a file called <code>letter.txt</code> that contains <code>a</code>. The alpha directory looks like this:
<span style="white-space: pre-wrap"><code>alpha</code><br><code>└── data</code><br><code>    └── letter.txt</code></span>

## Initialize the repository
<span style="white-space: pre-wrap"><code>\~/alpha \$ git init</code><br><code>          Initialized empty Git repository</code></span>

<code>git init</code> makes the current directory into a Git repository. To do this, it creates a <code>.git</code> directory and writes some files to it. These files define everything about the Git configuration and the history of the project. They are just ordinary files. No magic in them. The user can read and edit them with a text editor or shell. Which is to say: the user can read and edit the history of their project as easily as their project files.

The <code>alpha</code> directory now looks like this:
<span style="white-space: pre-wrap"><code>alpha</code><br><code>├── data</code><br><code>|   └── letter.txt</code><br><code>└── .git</code><br><code>    ├── objects</code><br><code>    etc...</code></span>

The <code>.git</code> directory and its contents are Git’s. All the other files are collectively known as the working copy. They are the user’s.
## Add some files
<span style="white-space: pre-wrap"><code>\~/alpha \$ git add data/letter.txt</code></span>

The user runs <code>git add</code> on <code>data/letter.txt</code>. This has two effects.

First, it creates a new blob file in the <code>.git/objects/</code> directory.

This blob file contains the compressed content of <code>data/letter.txt</code>. Its name is derived by hashing its content. Hashing a piece of text means running a program on it that turns it into a smaller<sup>[1](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fn:1)</sup> piece of text that uniquely<sup>[2](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fn:2)</sup> identifies the original. For example, Git hashes <code>a</code> to <code>2e65efe2a145dda7ee51d1741299f848e5bf752e</code>. The first two characters are used as the name of a directory inside the objects database: <code>.git/objects/2e/</code>. The rest of the hash is used as the name of the blob file that holds the content of the added file: <code>.git/objects/2e/65efe2a145dda7ee51d1741299f848e5bf752e</code>.

Notice how just adding a file to Git saves its content to the <code>objects</code> directory. Its content will still be safe inside Git if the user deletes <code>data/letter.txt</code> from the working copy.

Second, <code>git add</code> adds the file to the index. The index is a list that contains every file that Git has been told to keep track of. It is stored as a file at <code>.git/index</code>. Each line of the file maps a tracked file to the hash of its content at the moment it was added. This is the index after the <code>git add</code> command is run:
<span style="white-space: pre-wrap"><code>data/letter.txt 2e65efe2a145dda7ee51d1741299f848e5bf752e</code></span>

The user makes a file called <code>data/number.txt</code> that contains <code>1234</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '1234' \> data/number.txt</code></span>

The working copy looks like this:
<span style="white-space: pre-wrap"><code>alpha</code><br><code>└── data</code><br><code>    └── letter.txt</code><br><code>    └── number.txt</code></span>

The user adds the file to Git.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git add data</code></span>

The <code>git add</code> command creates a blob object that contains the content of <code>data/number.txt</code>. It adds an index entry for <code>data/number.txt</code> that points at the blob. This is the index after the <code>git add</code> command is run a second time:
<span style="white-space: pre-wrap"><code>data/letter.txt 2e65efe2a145dda7ee51d1741299f848e5bf752e</code><br><code>data/number.txt 274c0052dd5408f8ae2bc8440029ff67d79bc5c3</code></span>

Notice that only the files in the <code>data</code> directory are listed in the index, though the user ran <code>git add data</code>. The <code>data</code> directory is not listed separately.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '1' \> data/number.txt</code><br><code>\~/alpha \$ git add data</code></span>

When the user originally created <code>data/number.txt</code>, they meant to type <code>1</code>, not <code>1234</code>. They make the correction and add the file to the index again. This command creates a new blob with the new content. And it updates the index entry for <code>data/number.txt</code> to point at the new blob.
## Make a commit
<span style="white-space: pre-wrap"><code>\~/alpha \$ git commit -m 'a1'</code><br><code>          \[master (root-commit) 774b54a\] a1</code></span>

The user makes the <code>a1</code> commit. Git prints some data about the commit. These data will make sense shortly.

The commit command has three steps. It creates a tree graph to represent the content of the version of the project being committed. It creates a commit object. It points the current branch at the new commit object.
### Create a tree graph

Git records the current state of the project by creating a tree graph from the index. This tree graph records the location and content of every file in the project.

The graph is composed of two types of object: blobs and trees.

Blobs are stored by <code>git add</code>. They represent the content of files.

Trees are stored when a commit is made. A tree represents a directory in the working copy.

Below is the tree object that records the contents of the <code>data</code> directory for the new commit:
<span style="white-space: pre-wrap"><code>100664 blob 2e65efe2a145dda7ee51d1741299f848e5bf752e letter.txt</code><br><code>100664 blob 56a6051ca2b02b04ef92d5150c9ef600403cb1de number.txt</code></span>

The first line records everything required to reproduce <code>data/letter.txt</code>. The first part states the file’s permissions. The second part states that the content of this entry is represented by a blob, rather than a tree. The third part states the hash of the blob. The fourth part states the file’s name.

The second line records the same for <code>data/number.txt</code>.

Below is the tree object for <code>alpha</code>, which is the root directory of the project:
<span style="white-space: pre-wrap"><code>040000 tree 0eed1217a2947f4930583229987d90fe5e8e0b74 data</code></span>

The sole line in this tree points at the <code>data</code> tree.

![[Git From the Inside Out/1-a1-tree-graph.png]]

Tree graph for the \`a1\` commit

In the graph above, the <code>root</code> tree points at the <code>data</code> tree. The <code>data</code> tree points at the blobs for <code>data/letter.txt</code> and <code>data/number.txt</code>.
### Create a commit object

<code>git commit</code> creates a commit object after creating the tree graph. The commit object is just another text file in <code>.git/objects/</code>:
<span style="white-space: pre-wrap"><code>tree ffe298c3ce8bb07326f888907996eaa48d266db4</code><br><code>author Mary Rose Cook \<mary@maryrosecook.com\> 1424798436 -0500</code><br><code>committer Mary Rose Cook \<mary@maryrosecook.com\> 1424798436 -0500</code><br><code></code><br><code>a1</code></span>

The first line points at the tree graph. The hash is for the tree object that represents the root of the working copy. That is: the <code>alpha</code> directory. The last line is the commit message.

![[Git From the Inside Out/2-a1-commit.png]]

\`a1\` commit object pointing at its tree graph
### Point the current branch at the new commit

Finally, the commit command points the current branch at the new commit object.

Which is the current branch? Git goes to the <code>HEAD</code> file at <code>.git/HEAD</code> and finds:
<span style="white-space: pre-wrap"><code>ref: refs/heads/master</code></span>

This says that <code>HEAD</code> is pointing at <code>master</code>. <code>master</code> is the current branch.

<code>HEAD</code> and <code>master</code> are both refs. A ref is a label used by Git or the user to identify a specific commit.

The file that represents the <code>master</code> ref does not exist, because this is the first commit to the repository. Git creates the file at <code>.git/refs/heads/master</code> and sets its content to the hash of the commit object:
<span style="white-space: pre-wrap"><code>74ac3ad9cde0b265d2b4f1c778b283a6e2ffbafd</code></span>

(If you are typing in these Git commands as you read, the hash of your <code>a1</code> commit will be different from the hash of mine. Content objects like blobs and trees always hash to the same value. Commits do not, because they include dates and the names of their creators.)

Let’s add <code>HEAD</code> and <code>master</code> to the Git graph:

![[Git From the Inside Out/3-a1-refs.png]]

\`HEAD\` pointing at \`master\` and \`master\` pointing at the \`a1\` commit

<code>HEAD</code> points at <code>master</code>, as it did before the commit. But <code>master</code> now exists and points at the new commit object.
## Make a commit that is not the first commit

Below is the Git graph after the <code>a1</code> commit. The working copy and index are included.

![[Git From the Inside Out/4-a1-wc-and-index.png]]

\`a1\` commit shown with the working copy and index

Notice that the working copy, index, and <code>a1</code> commit all have the same content for <code>data/letter.txt</code> and <code>data/number.txt</code>. The index and <code>HEAD</code> commit both use hashes to refer to blob objects, but the working copy content is stored as text in a different place.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '2' \> data/number.txt</code></span>

The user sets the content of <code>data/number.txt</code> to <code>2</code>. This updates the working copy, but leaves the index and <code>HEAD</code> commit as they are.

![[Git From the Inside Out/5-a1-wc-number-set-to-2.png]]

\`data/number.txt\` set to \`2\` in the working copy
<span style="white-space: pre-wrap"><code>\~/alpha \$ git add data/number.txt</code></span>

The user adds the file to Git. This adds a blob containing <code>2</code> to the <code>objects</code> directory. It points the index entry for <code>data/number.txt</code> at the new blob.

![[Git From the Inside Out/6-a1-wc-and-index-number-set-to-2.png]]

\`data/number.txt\` set to \`2\` in the working copy and index
<span style="white-space: pre-wrap"><code>\~/alpha \$ git commit -m 'a2'</code><br><code>          \[master f0af7e6\] a2</code></span>

The user commits. The steps for the commit are the same as before.

First, a new tree graph is created to represent the content of the index.

The index entry for <code>data/number.txt</code> has changed. The old <code>data</code> tree no longer reflects the indexed state of the <code>data</code> directory. A new <code>data</code> tree object must be created:
<span style="white-space: pre-wrap"><code>100664 blob 2e65efe2a145dda7ee51d1741299f848e5bf752e letter.txt</code><br><code>100664 blob d8263ee9860594d2806b0dfd1bfd17528b0ba2a4 number.txt</code></span>

The new <code>data</code> tree hashes to a different value from the old <code>data</code> tree. A new <code>root</code> tree must be created to record this hash:
<span style="white-space: pre-wrap"><code>040000 tree 40b0318811470aaacc577485777d7a6780e51f0b data</code></span>

Second, a new commit object is created.
<span style="white-space: pre-wrap"><code>tree ce72afb5ff229a39f6cce47b00d1b0ed60fe3556</code><br><code>parent 774b54a193d6cfdd081e581a007d2e11f784b9fe</code><br><code>author Mary Rose Cook \<mary@maryrosecook.com\> 1424813101 -0500</code><br><code>committer Mary Rose Cook \<mary@maryrosecook.com\> 1424813101 -0500</code><br><code></code><br><code>a2</code></span>

The first line of the commit object points at the new <code>root</code> tree object. The second line points at <code>a1</code>: the commit’s parent. To find the parent commit, Git went to <code>HEAD</code>, followed it to <code>master</code> and found the commit hash of <code>a1</code>.

Third, the content of the <code>master</code> branch file is set to the hash of the new commit.

![[Git From the Inside Out/7-a2.png]]

\`a2\` commit

![[Git From the Inside Out/7-a2.png]]

Git graph without the working copy and index

<strong>Graph property</strong>: content is stored as a tree of objects. This means that only diffs are stored in the objects database. Look at the graph above. The <code>a2</code> commit reuses the <code>a</code> blob that was made before the <code>a1</code> commit. Similarly, if a whole directory doesn’t change from commit to commit, its tree and all the blobs and trees below it can be reused. Generally, there are few content changes from commit to commit. This means that Git can store large commit histories in a small amount of space.

<strong>Graph property</strong>: each commit has a parent. This means that a repository can store the history of a project.

<strong>Graph property</strong>: refs are entry points to one part of the commit history or another. This means that commits can be given meaningful names. The user organizes their work into lineages that are meaningful to their project with concrete refs like <code>fix-for-bug-376</code>. Git uses symbolic refs like <code>HEAD</code>, <code>MERGE\_HEAD</code> and <code>FETCH\_HEAD</code> to support commands that manipulate the commit history.

<strong>Graph property</strong>: the nodes in the <code>objects/</code> directory are immutable. This means that content is edited, not deleted. Every piece of content ever added and every commit ever made is somewhere in the <code>objects</code> directory<sup>[3](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fn:3)</sup>.

<strong>Graph property</strong>: refs are mutable. Therefore, the meaning of a ref can change. The commit that <code>master</code> points at might be the best version of a project at the moment, but, soon enough, it will be superseded by a newer and better commit.

<strong>Graph property</strong>: the working copy and the commits pointed at by refs are readily available, but other commits are not. This means that recent history is easier to recall, but that it also changes more often. Or: Git has a fading memory that must be jogged with increasingly vicious prods.

The working copy is the easiest point in history to recall because it is in the root of the repository. Recalling it doesn’t even require a Git command. It is also the least permanent point in history. The user can make a dozen versions of a file but Git won’t record any of them unless they are added.

The commit that <code>HEAD</code> points at is very easy to recall. It is at the tip of the branch that is checked out. To see its content, the user can just stash<sup>[4](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fn:4)</sup> and then examine the working copy. At the same time, <code>HEAD</code> is the most frequently changing ref.

The commit that a concrete ref points at is easy to recall. The user can simply check out that branch. The tip of a branch changes less often than <code>HEAD</code>, but often enough for the meaning of a branch name to be changeable.

It is difficult to recall a commit that is not pointed at by any ref. The further the user goes from a ref, the harder it will be for them to construct the meaning of a commit. But the further back they go, the less likely it is that someone will have changed history since they last looked<sup>[5](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fn:5)</sup>.
## Check out a commit
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout 37888c2</code><br><code>          You are in 'detached HEAD' state...</code></span>

The user checks out the <code>a2</code> commit using its hash. (If you are running these Git commands, this one won’t work. Use <code>git log</code> to find the hash of your <code>a2</code> commit.)

Checking out has four steps.

First, Git gets the <code>a2</code> commit and gets the tree graph it points at.

Second, it writes the file entries in the tree graph to the working copy. This results in no changes. The working copy already has the content of the tree graph being written to it because <code>HEAD</code> was already pointing via <code>master</code> at the <code>a2</code> commit.

Third, Git writes the file entries in the tree graph to the index. This, too, results in no changes. The index already has the content of the <code>a2</code> commit.

Fourth, the content of <code>HEAD</code> is set to the hash of the <code>a2</code> commit:
<span style="white-space: pre-wrap"><code>f0af7e62679e144bb28c627ee3e8f7bdb235eee9</code></span>

Setting the content of <code>HEAD</code> to a hash puts the repository in the detached <code>HEAD</code> state. Notice in the graph below that <code>HEAD</code> points directly at the <code>a2</code> commit, rather than pointing at <code>master</code>.

![[Git From the Inside Out/8-a2-just-objects-commits-and-refs.png]]

Detached \`HEAD\` on \`a2\` commit
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '3' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m 'a3'</code><br><code>          \[detached HEAD 3645a0e\] a3</code></span>

The user sets the content of <code>data/number.txt</code> to <code>3</code> and commits the change. Git goes to <code>HEAD</code> to get the parent of the <code>a3</code> commit. Instead of finding and following a branch ref, it finds and returns the hash of the <code>a2</code> commit.

Git updates <code>HEAD</code> to point directly at the hash of the new <code>a3</code> commit. The repository is still in the detached <code>HEAD</code> state. It is not on a branch because no commit points at either <code>a3</code> or one of its descendants. This means it is easy to lose.

From now on, trees and blobs will mostly be omitted from the graph diagrams.

![[Git From the Inside Out/9-a2-detached-head.png]]

\`a3\` commit that is not on a branch
## Create a branch
<span style="white-space: pre-wrap"><code>\~/alpha \$ git branch deputy</code></span>

The user creates a new branch called <code>deputy</code>. This just creates a new file at <code>.git/refs/heads/deputy</code> that contains the hash that <code>HEAD</code> is pointing at: the hash of the <code>a3</code> commit.

<strong>Graph property</strong>: branches are just refs and refs are just files. This means that Git branches are lightweight.

The creation of the <code>deputy</code> branch puts the new <code>a3</code> commit safely on a branch. <code>HEAD</code> is still detached because it still points directly at a commit.

![[Git From the Inside Out/10-a3-detached-head.png]]

\`a3\` commit now on the \`deputy\` branch
## Check out a branch
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout master</code><br><code>          Switched to branch 'master'</code></span>

The user checks out the <code>master</code> branch.

First, Git gets the <code>a2</code> commit that <code>master</code> points at and gets the tree graph the commit points at.

Second, Git writes the file entries in the tree graph to the files of the working copy. This sets the content of <code>data/number.txt</code> to <code>2</code>.

Third, Git writes the file entries in the tree graph to the index. This updates the entry for <code>data/number.txt</code> to the hash of the <code>2</code> blob.

Fourth, Git points <code>HEAD</code> at <code>master</code> by changing its content from a hash to:
<span style="white-space: pre-wrap"><code>ref: refs/heads/master</code></span>

![[Git From the Inside Out/11-a3-on-deputy.png]]

\`master\` checked out and pointing at the \`a2\` commit
## Check out a branch that is incompatible with the working copy
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '789' \> data/number.txt</code><br><code>\~/alpha \$ git checkout deputy</code><br><code>          Your changes to these files would be overwritten</code><br><code>          by checkout:</code><br><code>            data/number.txt</code><br><code>          Commit your changes or stash them before you</code><br><code>          switch branches.</code></span>

The user accidentally sets the content of <code>data/number.txt</code> to <code>789</code>. They try to check out <code>deputy</code>. Git prevents the check out.

<code>HEAD</code> points at <code>master</code> which points at <code>a2</code> where <code>data/number.txt</code> reads <code>2</code>. <code>deputy</code> points at <code>a3</code> where <code>data/number.txt</code> reads <code>3</code>. The working copy version of <code>data/number.txt</code> reads <code>789</code>. All these versions are different and the differences must be resolved.

Git could replace the working copy version of <code>data/number.txt</code> with the version in the commit being checked out. But it avoids data loss at all costs.

Git could merge the working copy version with the version being checked out. But this is complicated.

So, Git aborts the check out.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '2' \> data/number.txt</code><br><code>\~/alpha \$ git checkout deputy</code><br><code>          Switched to branch 'deputy'</code></span>

The user notices that they accidentally edited <code>data/number.txt</code> and sets the content back to <code>2</code>. They check out <code>deputy</code> successfully.

![[Git From the Inside Out/12-a3-on-master-on-a2.png]]

\`deputy\` checked out
## Merge an ancestor
<span style="white-space: pre-wrap"><code>\~/alpha \$ git merge master</code><br><code>          Already up-to-date.</code></span>

The user merges <code>master</code> into <code>deputy</code>. Merging two branches means merging two commits. The first commit is the one that <code>deputy</code> points at: the receiver. The second commit is the one that <code>master</code> points at: the giver. For this merge, Git does nothing. It reports it is <code>Already up-to-date.</code>.

<strong>Graph property</strong>: the series of commits in the graph are interpreted as a series of changes made to the content of the repository. This means that, in a merge, if the giver commit is an ancestor of the receiver commit, Git will do nothing. Those changes have already been incorporated.
## Merge a descendent
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout master</code><br><code>          Switched to branch 'master'</code></span>

The user checks out <code>master</code>.

![[Git From the Inside Out/13-a3ondeputy.png]]

\`master\` checked out and pointing at the \`a2\` commit
<span style="white-space: pre-wrap"><code>\~/alpha \$ git merge deputy</code><br><code>          Fast-forward</code></span>

They merge <code>deputy</code> into <code>master</code>. Git discovers that the receiver commit, <code>a2</code>, is an ancestor of the giver commit, <code>a3</code>. It can do a fast-forward merge.

It gets the giver commit and gets the tree graph that it points at. It writes the file entries in the tree graph to the working copy and the index. It “fast-forwards” <code>master</code> to point at <code>a3</code>.

![[Git From the Inside Out/14-a3-on-master-on-a2.png]]

\`a3\` commit from \`deputy\` fast-forward merged into \`master\`

<strong>Graph property</strong>: the series of commits in the graph are interpreted as a series of changes made to the content of the repository. This means that, in a merge, if the giver is a descendent of the receiver, history is not changed. There is already a sequence of commits that describe the change to make: the sequence of commits between the receiver and the giver. But, though the Git history doesn’t change, the Git graph does change. The concrete ref that <code>HEAD</code> points at is updated to point at the giver commit.
## Merge two commits from different lineages
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '4' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m 'a4'</code><br><code>          \[master 7b7bd9a\] a4</code></span>

The user sets the content of <code>number.txt</code> to <code>4</code> and commits the change to <code>master</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout deputy</code><br><code>          Switched to branch 'deputy'</code><br><code>\~/alpha \$ printf 'b' \> data/letter.txt</code><br><code>\~/alpha \$ git add data/letter.txt</code><br><code>\~/alpha \$ git commit -m 'b3'</code><br><code>          \[deputy 982dffb\] b3</code></span>

The user checks out <code>deputy</code>. They set the content of <code>data/letter.txt</code> to <code>b</code> and commit the change to <code>deputy</code>.

![[Git From the Inside Out/15-a3-on-master.png]]

\`a4\` committed to \`master\`, \`b3\` committed to \`deputy\` and \`deputy\` checked out

<strong>Graph property</strong>: commits can share parents. This means that new lineages can be created in the commit history.

<strong>Graph property</strong>: commits can have multiple parents. This means that separate lineages can be joined by a commit with two parents: a merge commit.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git merge master -m 'b4'</code><br><code>          Merge made by the 'recursive' strategy.</code></span>

The user merges <code>master</code> into <code>deputy</code>.

Git discovers that the receiver, <code>b3</code>, and the giver, <code>a4</code>, are in different lineages. It makes a merge commit. This process has eight steps.

First, Git writes the hash of the giver commit to a file at <code>alpha/.git/MERGE\_HEAD</code>. The presence of this file tells Git it is in the middle of merging.

Second, Git finds the base commit: the most recent ancestor that the receiver and giver commits have in common.

![[Git From the Inside Out/16-a4-b3-on-deputy.png]]

\`a3\`, the base commit of \`a4\` and \`b3\`

<strong>Graph property</strong>: commits have parents. This means that it is possible to find the point at which two lineages diverged. Git traces backwards from <code>b3</code> to find all its ancestors and backwards from <code>a4</code> to find all its ancestors. It finds the most recent ancestor shared by both lineages, <code>a3</code>. This is the base commit.

Third, Git generates the indices for the base, receiver and giver commits from their tree graphs.

Fourth, Git generates a diff that combines the changes made to the base by the receiver commit and the giver commit. This diff is a list of file paths that point to a change: add, remove, modify or conflict.

Git gets the list of all the files that appear in the base, receiver or giver indices. For each one, it compares the index entries to decide the change to make to the file. It writes a corresponding entry to the diff. In this case, the diff has two entries.

The first entry is for <code>data/letter.txt</code>. The content of this file is <code>a</code> in the base, <code>b</code> in the receiver and <code>a</code> in the giver. The content is different in the base and receiver. But it is the same in the base and giver. Git sees that the content was modified by the receiver, but not the giver. The diff entry for <code>data/letter.txt</code> is a modification, not a conflict.

The second entry in the diff is for <code>data/number.txt</code>. In this case, the content is the same in the base and receiver, and different in the giver. The diff entry for <code>data/letter.txt</code> is also a modification.

<strong>Graph property</strong>: it is possible to find the base commit of a merge. This means that, if a file has changed from the base in just the receiver or giver, Git can automatically resolve the merge of that file. This reduces the work the user must do.

Fifth, the changes indicated by the entries in the diff are applied to the working copy. The content of <code>data/letter.txt</code> is set to <code>b</code> and the content of <code>data/number.txt</code> is set to <code>4</code>.

Sixth, the changes indicated by the entries in the diff are applied to the index. The entry for <code>data/letter.txt</code> is pointed at the <code>b</code> blob and the entry for <code>data/number.txt</code> is pointed at the <code>4</code> blob.

Seventh, the updated index is committed:
<span style="white-space: pre-wrap"><code>tree 20294508aea3fb6f05fcc49adaecc2e6d60f7e7d</code><br><code>parent 982dffb20f8d6a25a8554cc8d765fb9f3ff1333b</code><br><code>parent 7b7bd9a5253f47360d5787095afc5ba56591bfe7</code><br><code>author Mary Rose Cook \<mary@maryrosecook.com\> 1425596551 -0500</code><br><code>committer Mary Rose Cook \<mary@maryrosecook.com\> 1425596551 -0500</code><br><code></code><br><code>b4</code></span>

Notice that the commit has two parents.

Eighth, Git points the current branch, <code>deputy</code>, at the new commit.

![[Git From the Inside Out/17-a4-b3-on-deputy.png]]

\`b4\`, the merge commit resulting from the recursive merge of \`a4\` into \`b3\`
## Merge two commits from different lineages that both modify the same file
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout master</code><br><code>          Switched to branch 'master'</code><br><code>\~/alpha \$ git merge deputy</code><br><code>          Fast-forward</code></span>

The user checks out <code>master</code>. They merge <code>deputy</code> into <code>master</code>. This fast-forwards <code>master</code> to the <code>b4</code> commit. <code>master</code> and <code>deputy</code> now point at the same commit.

![[Git From the Inside Out/18-b4-on-deputy.png]]

\`deputy\` merged into \`master\` to bring \`master\` up to the latest commit, \`b4\`
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout deputy</code><br><code>          Switched to branch 'deputy'</code><br><code>\~/alpha \$ printf '5' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m 'b5'</code><br><code>          \[deputy bd797c2\] b5</code></span>

The user checks out <code>deputy</code>. They set the content of <code>data/number.txt</code> to <code>5</code> and commit the change to <code>deputy</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git checkout master</code><br><code>          Switched to branch 'master'</code><br><code>\~/alpha \$ printf '6' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m 'b6'</code><br><code>          \[master 4c3ce18\] b6</code></span>

The user checks out <code>master</code>. They set the content of <code>data/number.txt</code> to <code>6</code> and commit the change to <code>master</code>.

![[Git From the Inside Out/19-b4-master-deputy-on-b4.png]]

\`b5\` commit on \`deputy\` and \`b6\` commit on \`master\`
<span style="white-space: pre-wrap"><code>\~/alpha \$ git merge deputy</code><br><code>          CONFLICT in data/number.txt</code><br><code>          Automatic merge failed; fix conflicts and</code><br><code>          commit the result.</code></span>

The user merges <code>deputy</code> into <code>master</code>. There is a conflict and the merge is paused. The process for a conflicted merge follows the same first six steps as the process for an unconflicted merge: set <code>.git/MERGE\_HEAD</code>, find the base commit, generate the indices of the base, receiver and giver commits, create a diff, update the working copy and update the index. Because of the conflict, the seventh commit step and eighth ref update step are never taken. Let’s go through the steps again and see what happens.

First, Git writes the hash of the giver commit to a file at <code>.git/MERGE\_HEAD</code>.

![[Git From the Inside Out/21-b6-on-master-with-merge-head.png]]

\`MERGE\_HEAD\` written during merge of \`b5\` into \`b6\`

Second, Git finds the base commit, <code>b4</code>.

Third, Git generates the indices for the base, receiver and giver commits.

Fourth, Git generates a diff that combines the changes made to the base by the receiver commit and the giver commit. This diff is a list of file paths that point to a change: add, remove, modify or conflict.

In this case, the diff contains only one entry: <code>data/number.txt</code>. The entry is marked as a conflict because the content for <code>data/number.txt</code> is different in the receiver, giver and base.

Fifth, the changes indicated by the entries in the diff are applied to the working copy. For a conflicted area, Git writes both versions to the file in the working copy. The content of <code>data/number.txt</code> is set to:
<span style="white-space: pre-wrap"><code>\<\<\<\<\<\<\< HEAD</code><br><code>6</code><br><code>=======</code><br><code>5</code><br><code>\>\>\>\>\>\>\> deputy</code></span>

Sixth, the changes indicated by the entries in the diff are applied to the index. Entries in the index are uniquely identified by a combination of their file path and stage. The entry for an unconflicted file has a stage of <code>0</code>. Before this merge, the index looked like this, where the <code>0</code>s are stage values:
<span style="white-space: pre-wrap"><code>0 data/letter.txt 63d8dbd40c23542e740659a7168a0ce3138ea748</code><br><code>0 data/number.txt 62f9457511f879886bb7728c986fe10b0ece6bcb</code></span>

After the merge diff is written to the index, the index looks like this:
<span style="white-space: pre-wrap"><code>0 data/letter.txt 63d8dbd40c23542e740659a7168a0ce3138ea748</code><br><code>1 data/number.txt bf0d87ab1b2b0ec1a11a3973d2845b42413d9767</code><br><code>2 data/number.txt 62f9457511f879886bb7728c986fe10b0ece6bcb</code><br><code>3 data/number.txt 7813681f5b41c028345ca62a2be376bae70b7f61</code></span>

The entry for <code>data/letter.txt</code> at stage <code>0</code> is the same as it was before the merge. The entry for <code>data/number.txt</code> at stage <code>0</code> is gone. There are three new entries in its place. The entry for stage <code>1</code> has the hash of the base <code>data/number.txt</code> content. The entry for stage <code>2</code> has the hash of the receiver <code>data/number.txt</code> content. The entry for stage <code>3</code> has the hash of the giver <code>data/number.txt</code> content. The presence of these three entries tells Git that <code>data/number.txt</code> is in conflict.

The merge pauses.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '11' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code></span>

The user integrates the content of the two conflicting versions by setting the content of <code>data/number.txt</code> to <code>11</code>. They add the file to the index. Git adds a blob containing <code>11</code>. Adding a conflicted file tells Git that the conflict is resolved. Git removes the <code>data/number.txt</code> entries for stages <code>1</code>, <code>2</code> and <code>3</code> from the index. It adds an entry for <code>data/number.txt</code> at stage <code>0</code> with the hash of the new blob. The index now reads:
<span style="white-space: pre-wrap"><code>0 data/letter.txt 63d8dbd40c23542e740659a7168a0ce3138ea748</code><br><code>0 data/number.txt 9d607966b721abde8931ddd052181fae905db503</code></span>

<span style="white-space: pre-wrap"><code>\~/alpha \$ git commit -m 'b11'</code><br><code>          \[master 251a513\] b11</code></span>

Seventh, the user commits. Git sees <code>.git/MERGE\_HEAD</code> in the repository, which tells it that a merge is in progress. It checks the index and finds there are no conflicts. It creates a new commit, <code>b11</code>, to record the content of the resolved merge. It deletes the file at <code>.git/MERGE\_HEAD</code>. This completes the merge.

Eighth, Git points the current branch, <code>master</code>, at the new commit.

![[Git From the Inside Out/22-b11-on-master.png]]

\`b11\`, the merge commit resulting from the conflicted, recursive merge of \`b5\` into \`b6\`
## Remove a file

This diagram of the Git graph includes the commit history, the trees and blobs for the latest commit, and the working copy and index:

![[Git From the Inside Out/23-b11-with-objects-wc-and-index.png]]

The working copy, index, \`b11\` commit and its tree graph
<span style="white-space: pre-wrap"><code>\~/alpha \$ git rm data/letter.txt</code><br><code>          rm 'data/letter.txt'</code></span>

The user tells Git to remove <code>data/letter.txt</code>. The file is deleted from the working copy. The entry is deleted from the index.

![[Git From the Inside Out/24-b11-letter-removed-from-wc-and-index.png]]

After \`data/letter.txt\` \`rm\`ed from working copy and index
<span style="white-space: pre-wrap"><code>\~/alpha \$ git commit -m '11'</code><br><code>          \[master d14c7d2\] 11</code></span>

The user commits. As part of the commit, as always, Git builds a tree graph that represents the content of the index. <code>data/letter.txt</code> is not included in the tree graph because it is not in the index.

![[Git From the Inside Out/25-11.png]]

\`11\` commit made after \`data/letter.txt\` \`rm\`ed
## Copy a repository
<span style="white-space: pre-wrap"><code>\~/alpha \$ cd ..</code><br><code>      \~ \$ cp -R alpha bravo</code></span>

The user copies the contents of the <code>alpha/</code> repository to the <code>bravo/</code> directory. This produces the following directory structure:
<span style="white-space: pre-wrap"><code>\~</code><br><code>├── alpha</code><br><code>|   └── data</code><br><code>|       └── number.txt</code><br><code>└── bravo</code><br><code>    └── data</code><br><code>        └── number.txt</code></span>

There is now another Git graph in the <code>bravo</code> directory:

![[Git From the Inside Out/26-11-cp-alpha-to-bravo.png|600]]

New graph created when \`alpha\` \`cp\`ed to \`bravo\`
## Link a repository to another repository
<span style="white-space: pre-wrap"><code>      \~ \$ cd alpha</code><br><code>\~/alpha \$ git remote add bravo ../bravo</code></span>

The user moves back into the <code>alpha</code> repository. They set up <code>bravo</code> as a remote repository on <code>alpha</code>. This adds some lines to the file at <code>alpha/.git/config</code>:
<span style="white-space: pre-wrap"><code>\[remote "bravo"\]</code><br><code>	url = ../bravo/</code></span>

These lines specify that there is a remote repository called <code>bravo</code> in the directory at <code>../bravo</code>.
## Fetch a branch from a remote
<span style="white-space: pre-wrap"><code>\~/alpha \$ cd ../bravo</code><br><code>\~/bravo \$ printf '12' \> data/number.txt</code><br><code>\~/bravo \$ git add data/number.txt</code><br><code>\~/bravo \$ git commit -m '12'</code><br><code>          \[master 94cd04d\] 12</code></span>

The user goes into the <code>bravo</code> repository. They set the content of <code>data/number.txt</code> to <code>12</code> and commit the change to <code>master</code> on <code>bravo</code>.

![[Git From the Inside Out/27-12-bravo.png|600]]

\`12\` commit on \`bravo\` repository
<span style="white-space: pre-wrap"><code>\~/bravo \$ cd ../alpha</code><br><code>\~/alpha \$ git fetch bravo master</code><br><code>          Unpacking objects: 100%</code><br><code>          From ../bravo</code><br><code>            \* branch master -\> FETCH\_HEAD</code></span>

The user goes into the <code>alpha</code> repository. They fetch <code>master</code> from <code>bravo</code> into <code>alpha</code>. This process has four steps.

First, Git gets the hash of the commit that master is pointing at on <code>bravo</code>. This is the hash of the <code>12</code> commit.

Second, Git makes a list of all the objects that the <code>12</code> commit depends on: the commit object itself, the objects in its tree graph, the ancestor commits of the <code>12</code> commit and the objects in their tree graphs. It removes from this list any objects that the <code>alpha</code> object database already has. It copies the rest to <code>alpha/.git/objects/</code>.

Third, the content of the concrete ref file at <code>alpha/.git/refs/remotes/bravo/master</code> is set to the hash of the <code>12</code> commit.

Fourth, the content of <code>alpha/.git/FETCH\_HEAD</code> is set to:
<span style="white-space: pre-wrap"><code>94cd04d93ae88a1f53a4646532b1e8cdfbc0977f branch 'master' of ../bravo</code></span>

This indicates that the most recent fetch command fetched the <code>12</code> commit of <code>master</code> from <code>bravo</code>.

![[Git From the Inside Out/28-12-fetched-to-alpha.png|600]]

\`alpha\` after \`bravo/master\` fetched

<strong>Graph property</strong>: objects can be copied. This means that history can be shared between repositories.

<strong>Graph property</strong>: a repository can store remote branch refs like <code>alpha/.git/refs/remotes/bravo/master</code>. This means that a repository can record locally the state of a branch on a remote repository. It is correct at the time it is fetched but will go out of date if the remote branch changes.
## Merge FETCH\_HEAD
<span style="white-space: pre-wrap"><code>\~/alpha \$ git merge FETCH\_HEAD</code><br><code>          Updating d14c7d2..94cd04d</code><br><code>          Fast-forward</code></span>

The user merges <code>FETCH\_HEAD</code>. <code>FETCH\_HEAD</code> is just another ref. It resolves to the <code>12</code> commit, the giver. <code>HEAD</code> points at the <code>11</code> commit, the receiver. Git does a fast-forward merge and points <code>master</code> at the <code>12</code> commit.

![[Git From the Inside Out/29-12-merged-to-alpha.png|600]]

\`alpha\` after \`FETCH\_HEAD\` merged
## Pull a branch from a remote
<span style="white-space: pre-wrap"><code>\~/alpha \$ git pull bravo master</code><br><code>          Already up-to-date.</code></span>

The user pulls <code>master</code> from <code>bravo</code> into <code>alpha</code>. Pull is shorthand for “fetch and merge <code>FETCH\_HEAD</code>”. Git does these two commands and reports that <code>master</code> is <code>Already up-to-date</code>.
## Clone a repository
<span style="white-space: pre-wrap"><code>\~/alpha \$ cd ..</code><br><code>      \~ \$ git clone alpha charlie</code><br><code>          Cloning into 'charlie'</code></span>

The user moves into the directory above. They clone <code>alpha</code> to <code>charlie</code>. Cloning to <code>charlie</code> has similar results to the <code>cp</code> the user did to produce the <code>bravo</code> repository. Git creates a new directory called <code>charlie</code>. It inits <code>charlie</code> as a Git repo, adds <code>alpha</code> as a remote called <code>origin</code>, fetches <code>origin</code> and merges <code>FETCH\_HEAD</code>.
## Push a branch to a checked-out branch on a remote
<span style="white-space: pre-wrap"><code>      \~ \$ cd alpha</code><br><code>\~/alpha \$ printf '13' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m '13'</code><br><code>          \[master 3238468\] 13</code></span>

The user goes back into the <code>alpha</code> repository. They set the content of <code>data/number.txt</code> to <code>13</code> and commit the change to <code>master</code> on <code>alpha</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git remote add charlie ../charlie</code></span>

They set up <code>charlie</code> as a remote repository on <code>alpha</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ git push charlie master</code><br><code>          Writing objects: 100%</code><br><code>          remote error: refusing to update checked out</code><br><code>          branch: refs/heads/master because it will make</code><br><code>          the index and work tree inconsistent</code></span>

They push <code>master</code> to <code>charlie</code>.

All the objects required for the <code>13</code> commit are copied to <code>charlie</code>.

At this point, the push process stops. Git, as ever, tells the user what went wrong. It refuses to push to a branch that is checked out on the remote. This makes sense. A push would update the remote index and <code>HEAD</code>. This would cause confusion if someone were editing the working copy on the remote.

At this point, the user could make a new branch, merge the <code>13</code> commit into it and push that branch to <code>charlie</code>. But, really, they want a repository that they can push to whenever they want. They want a central repository that they can push to and pull from, but that no one commits to directly. They want something like a GitHub remote. They want a bare repository.
## Clone a bare repository
<span style="white-space: pre-wrap"><code>\~/alpha \$ cd ..</code><br><code>      \~ \$ git clone alpha delta --bare</code><br><code>          Cloning into bare repository 'delta'</code></span>

The user moves into the directory above. They clone <code>delta</code> as a bare repository. This is an ordinary clone with two differences. The <code>config</code> file indicates that the repository is bare. And the files that are normally stored in the <code>.git</code> directory are stored in the root of the repository:
<span style="white-space: pre-wrap"><code>delta</code><br><code>├── HEAD</code><br><code>├── config</code><br><code>├── objects</code><br><code>└── refs</code></span>

![[Git From the Inside Out/30-13-alpha-cloned-to-delta-bare.png|600]]

\`alpha\` and \`delta\` graphs after \`alpha\` cloned to \`delta\`
## Push a branch to a bare repository
<span style="white-space: pre-wrap"><code>      \~ \$ cd alpha</code><br><code>\~/alpha \$ git remote add delta ../delta</code></span>

The user goes back into the <code>alpha</code> repository. They set up <code>delta</code> as a remote repository on <code>alpha</code>.
<span style="white-space: pre-wrap"><code>\~/alpha \$ printf '14' \> data/number.txt</code><br><code>\~/alpha \$ git add data/number.txt</code><br><code>\~/alpha \$ git commit -m '14'</code><br><code>          \[master cb51da8\] 14</code></span>

They set the content of <code>data/number.txt</code> to <code>14</code> and commit the change to <code>master</code> on <code>alpha</code>.

![[Git From the Inside Out/31-14-alpha.png|600]]

\`14\` commit on \`alpha\`
<span style="white-space: pre-wrap"><code>\~/alpha \$ git push delta master</code><br><code>          Writing objects: 100%</code><br><code>          To ../delta</code><br><code>            3238468..cb51da8 master -\> master</code></span>

They push <code>master</code> to <code>delta</code>. Pushing has three steps.

First, all the objects required for the <code>14</code> commit on the <code>master</code> branch are copied from <code>alpha/.git/objects/</code> to <code>delta/objects/</code>.

Second, <code>delta/refs/heads/master</code> is updated to point at the <code>14</code> commit.

Third, <code>alpha/.git/refs/remotes/delta/master</code> is set to point at the <code>14</code> commit. <code>alpha</code> has an up-to-date record of the state of <code>delta</code>.

![[Git From the Inside Out/32-14-pushed-to-delta.png|600]]

\`14\` commit pushed from \`alpha\` to \`delta\`
## Summary

Git is built on a graph. Almost every Git command manipulates this graph. To understand Git deeply, focus on the properties of this graph, not workflows or commands.

To learn more about Git, investigate the <code>.git</code> directory. It’s not scary. Look inside. Change the content of files and see what happens. Create a commit by hand. Try and see how badly you can mess up a repo. Then repair it.
1. In this case, the hash is longer than the original content. But, all pieces of content longer than the number of characters in a hash will be expressed more concisely than the original. [↩](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fnref:1)
2. There is a chance that two different pieces of content will hash to the same value. But this chance [is low](http://crypto.stackexchange.com/a/2584). [↩](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fnref:2)
3. <code>git prune</code> deletes all objects that cannot be reached from a ref. If the user runs this command, they may lose content. [↩](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fnref:3)
4. <code>git stash</code> stores all the differences between the working copy and the <code>HEAD</code> commit in a safe place. They can be retrieved later. [↩](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fnref:4)
5. The <code>rebase</code> command can be used to add, edit and delete commits in the history. [↩](https://codewords.recurse.com/issues/two/git-from-the-inside-out#fnref:5)
