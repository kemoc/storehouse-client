#!/usr/bin/env bash
# THIS SCRIPT MUST BE RUN FROM ./docker DIRECTORY!

DIR="$(dirname -- "$0")"
. ${DIR}/../../../.env
. ${DIR}/../../.env
. ${DIR}/.env.sh

. ${DIR}/stop.sh
. ${DIR}/start.sh
