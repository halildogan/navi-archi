# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
# add app

RUN yarn run build

# start app
CMD ["yarn", "dev"] 
