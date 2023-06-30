FROM ubuntu:latest

WORKDIR /usr/src/app

COPY package.json .
RUN apt-get -y update
RUN apt install nodejs
RUN apt install npm
RUN apt install curl
COPY . .

EXPOSE 3000

CMD ["index.js"]
