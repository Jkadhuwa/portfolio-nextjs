#Dockerfile

# Base Image
FROM node:alpine

# Create & set working directory
WORKDIR /portfolio

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

ENV NODE_ENV production