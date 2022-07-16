#!/usr/bin/env bash

DIR="$(dirname $(readlink -f $0))"
MAC_OS=$(sw_vers 2>/dev/null)
if [ ! -z "$MAC_OS" ]; then
  DIR="$(dirname "$0")"
fi

source $DIR/vars.sh
cd $DIR/..
git fetch
git checkout main &&
git pull &&
git checkout $FEATURE_BRANCH &&
git merge -m 'Merge main into $FEATURE_BRANCH' main &&
git push
