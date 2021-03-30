FROM debian:10

ARG NODEJS_VERSION=6.17.1

# Use the terminal with 256 colors support
ENV TERM=xterm-256color

ARG FAIL_FAST_VERBOSE="set -ex"
ENV DEBIAN_FRONTEND=noninteractive
ARG PKG_INSTALL="apt-get install --yes --no-install-recommends"

RUN echo "Pre-warm package manager cache..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; apt-get update

RUN echo "Install deps..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; ${PKG_INSTALL} curl ca-certificates xz-utils

# https://nodejs.org/dist/latest-v6.x/
RUN echo "Install node.js 6.x..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; cd /opt \
    ; curl --remote-name https://nodejs.org/dist/latest-v6.x/node-v${NODEJS_VERSION}-linux-x64.tar.xz \
    ; tar Jxvf node-v${NODEJS_VERSION}-linux-x64.tar.xz \
    ; /opt/node-v${NODEJS_VERSION}-linux-x64/bin/node --version | grep ${NODEJS_VERSION} \
    ; rm node-v${NODEJS_VERSION}-linux-x64.tar.xz

# Add node.js to PATH
ENV PATH="/opt/node-v${NODEJS_VERSION}-linux-x64/bin:$PATH"

# Check node.js version
RUN node --version | grep ${NODEJS_VERSION}

RUN echo "Install git for GitHub Actions..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; ${PKG_INSTALL} git

RUN echo "Cleanup apt package lists..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; rm -fr /var/lib/apt/lists/*

RUN echo "Install bower..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; npm install -g bower \
    ; bower --version

RUN echo "Install yarn..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; npm install -g yarn \
    ; yarn --version


COPY .bowerrc /app/.bowerrc
COPY .ember-cli /app/.ember-cli
COPY .jshintrc /app/.jshintrc
COPY bower.json /app/bower.json
COPY ember-cli-build.js /app/ember-cli-build.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN echo "Create node system user..." \
    ; ${FAIL_FAST_VERBOSE} \
    ; useradd --create-home node

RUN chown -fR node:node /app
WORKDIR /app

USER node

RUN yarn install
RUN bower install
