#!/usr/bin/env bash

#DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
#. ${DIR}/../../.env


#DIR="$(dirname -- "$0")"
#. ${DIR}/../../.env

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# DOCKER_ENV="dev|preprod"
DOCKER_ENV="dev"

# ="dev|prod"
#SYMFONY_ENV="dev"

DOCKER_ADMINX_USER="4000"
DOCKER_WWW_USER="4200"
HOST_ME_UID="${UID}"
# Last IP from filter:
MY_IP="$(ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -1)"

DOCKER_BUILD="docker-compose -p ${COMPOSE_PROJECT_NAME} build --pull"
#DOCKER_BUILD="docker-compose -p ${COMPOSE_PROJECT_NAME} build --no-cache --pull"
DOCKER_REBUILD="docker-compose -p ${COMPOSE_PROJECT_NAME} build --no-cache --pull"

DOCKER_DAEMON_START="docker-compose -p ${COMPOSE_PROJECT_NAME} up -d"
DOCKER_DAEMON_STOP="docker-compose -p ${COMPOSE_PROJECT_NAME} stop"

DOCKER_APP_PATH="/var/www/project"
DOCKER_APP_EXEC_ROOT="docker-compose -p ${COMPOSE_PROJECT_NAME} exec app"
DOCKER_APP_EXEC_ROOT_BASH="docker-compose -p ${COMPOSE_PROJECT_NAME} exec app bash"
#DOCKER_APP_EXEC_ROOT="docker-compose -p geo-distance exec app bash"

DOCKER_APP_EXEC="docker-compose -p ${COMPOSE_PROJECT_NAME} exec --user=${DOCKER_ADMINX_USER} app"
DOCKER_APP_EXEC_BASH="docker-compose -p ${COMPOSE_PROJECT_NAME} exec --user=${DOCKER_ADMINX_USER} app bash"

