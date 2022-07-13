#!/bin/bash

FEATURE_BRANCH="AQUI_MERO_VA_SU_RAMA_CON_TODO_Y_COMILLAS"
DIR="$(dirname $(readlink -f $0))"
MAC_OS=$(sw_vers 2>/dev/null)
if [ ! -z "$MAC_OS" ]; then
  DIR="$(dirname "$0")"
fi
cd $DIR/..
git fetch
git checkout development &&
git pull &&
git merge --no-ff -m 'Merge $FEATURE_BRANCH into development' $FEATURE_BRANCH &&
git push &&
git checkout $FEATURE_BRANCH &&
git merge -m 'Merge development into $FEATURE_BRANCH' development &&
git push
