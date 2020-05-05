#!/bin/bash

# exit with nonzero exit code if anything fails
set -e

# gather hashes for commit message
cd site-source
SOURCE_HASH="$(git rev-parse --short HEAD)"
cd ../junit-pioneer
XP_HASH="$(git rev-parse --short HEAD)"
cd ..

# now commit and push
cd site
git add --all
# echo "Update to source $SOURCE_HASH, xp $XP_HASH"
git commit -m "Update to source $SOURCE_HASH, xp $XP_HASH"
git push
