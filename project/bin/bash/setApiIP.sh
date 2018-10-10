#!/usr/bin/env bash

API_IP=""
API_DOMAIN=""

while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -i|--ip)
    API_IP="$2"
    shift # past argument
    shift # past argument
    ;;
    -d|--domain)
    API_DOMAIN="$2"
    shift # past argument
    shift # past argument
    ;;
    *)    # unknown option
    shift # past argument
    break;;
esac
done

LOCALHOST="localhost"

if [ "" == "$API_IP" ] ; then
  echo "no API ip"
  exit 0
fi

if [ "" == "$API_DOMAIN" ] ; then
  echo "no API domain"
  exit 0
fi

if [ "$LOCALHOST" == "$API_DOMAIN" ] ; then
  echo "It's localhost, stop."
  exit 0
fi

echo "API_IP API_DOMAIN"
echo "$API_IP $API_DOMAIN"

if grep -q "$API_DOMAIN" "/etc/hosts"; then
  #echo "aaa";
  sed "s/.*$API_DOMAIN.*/$API_IP $API_DOMAIN/" /etc/hosts > /tmp/hosts
  cat /tmp/hosts > /etc/hosts
  rm /tmp/hosts
  exit 0
fi

#echo "bbb"
echo "$API_IP $API_DOMAIN" >> /etc/hosts
echo "" >> /etc/hosts
