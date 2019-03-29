FROM node:10.15.3-jessie

COPY ./server /var/www/server

WORKDIR /var/www/server

RUN npm install -g nodemon

CMD npm install && nodemon index.js