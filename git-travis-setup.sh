#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

git config user.name "Travis CI"
git config user.email "travis@junit-pioneer.org"

# decrypt the deploy key and add to SSH agent;
# this makes the repo read-write-accessible via SSH
openssl aes-256-cbc -K $encrypted_4eabd460f39b_key -iv $encrypted_4eabd460f39b_iv -in deploy-key.enc -out deploy-key -d
chmod 600 deploy-key
eval `ssh-agent -s`
ssh-add deploy-key

# make the remote available via SSH, so it can be pushed to later
git remote set-url origin git@github.com:junit-pioneer/junit-pioneer.github.io.git
# fetch all the remote branches; travis clones with `--depth`, which implies
# `--single-branch`, so we need to overwrite remote.origin.fetch to do that
# (source: https://stackoverflow.com/a/44036486/2525313)
git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
git fetch --depth=5
