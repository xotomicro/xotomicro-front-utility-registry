########################################
# STEP 1 => INSTALL BASIC CONFIGURATIONS 
########################################

FROM node:14-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY . /app

# RUN npm rebuild node-sass

RUN yarn
RUN yarn build

# SERVICE : designsystem
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html

