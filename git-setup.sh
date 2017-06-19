# initializing submodule `junit-pioneer`
git submodule init
git submodule update
# adding worktrees `site` and `site-source`
git checkout master
git checkout site-source
git checkout grandmaster
git worktree add --checkout site master
git worktree add --checkout site-source site-source
