#!/usr/bin/env bash

DIR="$(dirname -- "$0")"
. ${DIR}/.env.sh

ARG_STRING=""

#while [[ $# -gt 0 ]]
#do
#ARG_STRING="${ARG_STRING} $1"
#
#done

cd $DOCKER_DIR/
bash bin/bash/app-exec-root.sh $@
cd $OLD_DIR
