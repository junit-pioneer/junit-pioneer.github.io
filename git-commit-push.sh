#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

cd $1
git add --all
git commit -m "Update site"
git push
