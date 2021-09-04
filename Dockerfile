FROM node:lts-alpine

# ARG AMPLIFY_CLI_VERSION="5.3.0"
# RUN npm install -g @aws-amplify/cli@${AMPLIFY_CLI_VERSION}

# ARG APP_PATH=/workspace
# WORKDIR ${APP_PATH}

# ENV PATH ${APP_PATH}/.bin:$PATH

# COPY package*.json ./
# RUN npm install

# CMD ["npm", "run", "dev"]
