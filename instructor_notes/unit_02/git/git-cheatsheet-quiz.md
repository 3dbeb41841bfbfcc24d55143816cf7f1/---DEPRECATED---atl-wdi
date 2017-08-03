## What do these commands do?

<details>
<summary>git branch</summary>
Lists all available branches
</details>

<details>
<summary>git checkout 	&#60;branch name	&#62;</summary>
Moves from current branch to a different branch
</details>

<details>
<summary>git checkout -b 	&#60;branch name	&#62;</summary>
Creates a branch and switches from current branch to just created branch
</details>

<details>
<summary>git branch -d 	&#60;branch name	&#62;</summary>
Deletes the branch with that name locally
</details>

<details>
<summary>git merge 	&#60;branch name	&#62;</summary>
Takes the committed code in the branch you pass in and merges it into the branch you're currently in
</details>

<details>
<summary>git remote -v</summary>
Lists all the remotes on your repo.
</details>

<details>
<summary>git remote add 	&#60;remote name	&#62; 	&#60;url	&#62;</summary>
- add a new remote to your repo
  - remote name would be:
    - origin (your fork or your repo)
    - upstream (the place your forked from)
    - heroku (the heroku remote url when you run $`heroku create`)
</details>

<details>
<summary>git remote remove 	&#60;remote name	&#62;</summary>
Deletes the remote named <em>remote name</em>
</details>