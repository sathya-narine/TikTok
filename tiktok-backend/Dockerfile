FROM node:22.14.0

WORKDIR /app

COPY package.json .

RUN npm install -g nodemon && npm install

COPY . .

EXPOSE 9000

CMD ["nodemon","server.js"]