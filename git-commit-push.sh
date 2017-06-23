#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

# SSH agent was shut down, so start it again, adding the deploy key
eval `ssh-agent -s`
ssh-add deploy-key

# now commit and push
cd $1
git add --all
git commit -m "Update site"
git push
