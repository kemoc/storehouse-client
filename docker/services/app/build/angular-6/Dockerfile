FROM nginx:1.15
MAINTAINER Radek Z

# Set usermod
RUN groupadd --gid 4000 adminx \
&& useradd --uid 4000 --gid adminx --shell /bin/bash --create-home adminx

RUN groupadd --gid 4100 node \
&& useradd --uid 4100 --gid node --shell /bin/bash --create-home node

RUN usermod -u 4200 www-data
RUN groupmod -g 4200 www-data

# https://hub.docker.com/_/php/

# Update sources
RUN apt update -y

RUN apt install -y build-essential

RUN apt install -y apt-utils

RUN apt-get install -y acl lsof
RUN apt-get install -y net-tools

RUN apt install -y g++

# Install GIT
RUN apt install -y git

# Install unzip
RUN apt-get install -y zip unzip

# Install Midnight Commander, Vim, Nano
RUN apt-get install -y mc vim nano

RUN apt install -y wget

# Install libssl
RUN apt-get install -y libssl-dev

ENV OLD_CPPFLAGS="$CPPFLAGS"
ENV CPPFLAGS="$OLD_CPPFLAGS -std=c++11"

ENV OLD_CXXFLAGS="$CXXFLAGS"
ENV CXXFLAGS="$OLD_CXXFLAGS -std=c++11"

# @todo: installation procedure of newer ICU (v59)
# https://github.com/webdevops/Dockerfile/issues/191
# https://github.com/docker-library/php/issues/455
RUN apt-get install -y libicu-dev
RUN mkdir /tmp/icu-source
WORKDIR /tmp/icu-source
RUN cd /tmp/icu-source
RUN wget 'http://download.icu-project.org/files/icu4c/60.2/icu4c-60_2-src.tgz' && \
    tar -zxvf icu4c-60_2-src.tgz
WORKDIR /tmp/icu-source/icu/source
RUN cd /tmp/icu-source/icu/source
RUN chmod +x runConfigureICU configure install-sh
RUN ./configure --prefix=/usr/local && \
    make
RUN make install
WORKDIR /root
RUN cd ~

#ENV CPPFLAGS="$OLD_CPPFLAGS"
ENV CXXFLAGS="$OLD_CXXFLAGS"

RUN rm -rf /tmp/icu*

# Install GRUNT
#RUN npm install -g grunt-cli


RUN apt install -y curl
RUN apt install -y libcurl3
RUN apt install -y libcurl3-dev
RUN apt install -y zlib1g-dev
RUN apt install -y libcurl4-openssl-dev

RUN apt install -y zlib1g-dev

# Install ImageMagick
RUN apt-get install -y imagemagick
RUN apt-get install -y \
    libmagickwand-dev \
    --no-install-recommends

# Setup timezone
ENV TZ="Europe/Paris"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install NodeJS
RUN apt-get install -my gnupg
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
RUN yarn --version

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# Set workdir
WORKDIR /var/www/project
RUN cd /var/www/project

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /var/www/project/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g typescript
RUN npm install -g @angular/cli --unsafe
RUN npm install



##################
### production ###
##################

# copy artifact build from the 'build environment'
#COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Cleanup the image
RUN rm -rf /var/lib/apt/lists/* /tmp/*
