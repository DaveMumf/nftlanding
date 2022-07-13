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
git checkout $FEATURE_BRANCH &&
git merge -m 'Merge development into feature branch' development &&
git push
