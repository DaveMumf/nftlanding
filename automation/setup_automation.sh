#!/usr/bin/env bash

DIR="$(dirname $(readlink -f $0))"
MAC_OS=$(sw_vers 2>/dev/null)
if [ ! -z "$MAC_OS" ]; then
  DIR="$(dirname "$0")"
fi

branch_name=''

print_usage() {
  printf "Usage: make_repo.sh [options]\noptions:\n"
  printf -- "-b\tbranch name. Mandatory. Needs argument. Name of branch to use\n"
  printf -- "-h\thelp. See this info\n"
  printf "\n\tExample: setup_automation.sh -b my-git-branch\n"
}

setup_templates() {
  printf "Creating files from templates...\n"
  sed "
    s/{{FEATURE_BRANCH}}/${branch_name}/g" <${DIR}/vars.sh.template >${DIR}/vars.sh
  printf "Done\n"
}

while getopts 'b:h' flag; do
  case "${flag}" in
    b) branch_name="${OPTARG}" ;;
    h) print_usage
       exit 1 ;;
    *) print_usage
       exit 1 ;;
  esac
done

if [ -z "${branch_name}" ]; then #if branch_name is empty exit
  printf "Error: Please specify a branch name with -b flag. \n\tExample: setup_automation.sh -b my-git-branch\n"
  exit 1
fi

setup_templates
