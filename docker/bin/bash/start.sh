#!/usr/bin/env bash

# THIS SCRIPT MUST BE RUN FROM ./docker DIRECTORY!

DIR="$(dirname -- "$0")"
. ${DIR}/../../../.env
. ${DIR}/../../.env
. ${DIR}/.env.sh


# start docker network as deamon
${DOCKER_DAEMON_START}

#cd volumes/var/run/php-fpm && umask 0000 && cd ./../../../..
${DOCKER_APP_EXEC_ROOT} setfacl -R -m u:${DOCKER_WWW_USER}:rx -m u:'root':rwx ./
${DOCKER_APP_EXEC_ROOT} setfacl -dR -m u:${DOCKER_WWW_USER}:rx -m u:'root':rwx ./

sudo setfacl -R -m u:${DOCKER_WWW_USER}:rwx -m u:'root':rwx ../docker/volumes/
#sudo setfacl -dR -m u:'4000':rwx -m o::rwx -m u:'root':rwx volumes/var/run
sudo setfacl -dR -m u:${DOCKER_WWW_USER}:rwx -m u:'root':rwx ../docker/volumes/
#sudo setfacl -dR -m u:'4000':rwx -m o::rwx -m u:'root':rwx volumes/var/run

sudo setfacl -R -m u:${HOST_ME_UID}:rwx -m u:${DOCKER_ADMINX_USER}:rwx ./../
sudo setfacl -dR -m u:${HOST_ME_UID}:rwx -m u:${DOCKER_ADMINX_USER}:rwx ./../

# run tests
#${DOCKER_APP_EXEC} ng test --watch=false

# generate build
#${DOCKER_APP_EXEC} npm run build --${APP_ENV}

if [ "$APP_ENV" = "prod" ] ; then
    ${DOCKER_APP_EXEC} ng build --prod
else
    # https://github.com/angular/angular-cli/issues/6349
    #${DOCKER_APP_EXEC} ng build

    ${DOCKER_APP_EXEC_ROOT} bash bin/bash/setApiIP.sh -i ${MY_IP} -d ${COMPOSE_API_DOMAIN}

    ${DOCKER_APP_EXEC} ng serve --host 0.0.0.0 --proxy-config proxy.conf.json
fi


