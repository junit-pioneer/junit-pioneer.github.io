#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

git config user.name "GitHub Actions"
git config user.email "ci@junit-pioneer.org"

# fetch all the remote branches; travis clones with `--depth`, which implies
# `--single-branch`, so we need to overwrite remote.origin.fetch to do that
# (source: https://stackoverflow.com/a/44036486/2525313)
git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch --depth=5
