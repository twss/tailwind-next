FROM node:lts-alpine

RUN apk add --update \
    ca-certificates \
    git \
    openssh \
    tig

ARG NPM_VERSION="7.22.0"
RUN npm install -g npm@${NPM_VERSION}
ARG AMPLIFY_CLI_VERSION="5.3.0"
RUN npm install -g @aws-amplify/cli@${AMPLIFY_CLI_VERSION}

ARG APP_PATH=/workspace
WORKDIR ${APP_PATH}

ENV PATH ${APP_PATH}/.bin:$PATH

RUN mkdir ${APP_PATH}/node_modules
COPY package*.json ./
RUN chown -R node:node ${APP_PATH}

USER node

RUN npm install

CMD ["npm", "run", "dev"]
