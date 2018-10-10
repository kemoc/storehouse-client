#!/usr/bin/env bash

DIR="$(dirname -- "$0")"
. ${DIR}/../../../.env
. ${DIR}/../../.env
. ${DIR}/.env.sh

ARG_STRING=""

#while [[ $# -gt 0 ]]
#do

#ARG_STRING="${ARG_STRING} $1"

#done

${DOCKER_APP_EXEC_ROOT_BASH}
