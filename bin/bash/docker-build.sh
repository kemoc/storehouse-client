#!/usr/bin/env bash

DIR="$(dirname -- "$0")"
. ${DIR}/.env.sh

cd $DOCKER_DIR/
bash bin/bash/build.sh
cd $OLD_DIR
