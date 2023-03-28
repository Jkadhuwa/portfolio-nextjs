#Dockerfile

# Base Image
FROM node:alpine

# Create & set working directory
WORKDIR /app

COPY package.json yarn.lock ./

ENV NODE_ENV production

RUN yarn install --frozen-lockfile


