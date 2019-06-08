FROM node:6.11.0

RUN npm install -g bower && bower --version

COPY app /app/app
COPY config /app/config
COPY public /app/public
COPY .bowerrc /app/.bowerrc
COPY .ember-cli /app/.ember-cli
COPY .jshintrc /app/.jshintrc
COPY bower.json /app/bower.json
COPY ember-cli-build.js /app/ember-cli-build.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN chown -fR node:node /app
WORKDIR /app

USER node

RUN yarn install
RUN bower install
