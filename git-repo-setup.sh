#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

# cloning projects
git clone https://github.com/junit-pioneer/junit-pioneer.git junit-pioneer --depth=10
git clone https://github.com/junit-pioneer/test-reports.git test-reports --depth=10
# adding worktrees `site` and `site-source`
git checkout master
git checkout site-source
git checkout grandmaster
git worktree add --checkout site master
git worktree add --checkout site-source site-source
