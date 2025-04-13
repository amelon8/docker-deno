FROM denoland/deno:alpine

RUN apk update && apk add \
    vim \
    curl

# -- App directory

RUN mkdir -p /usr/src/app /usr/src/bin
VOLUME /usr/src/app
WORKDIR /usr/src/app

#RUN npm install -g deno

#EXPOSE 3000
#CMD [ "npm", "run", "update-schema" ]
#CMD [ "npm", "start" ]

