FROM ubuntu:latest

WORKDIR /usr/src/app

COPY package.json .
RUN apt-get -y update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt install -y curl
COPY . .

EXPOSE 3000

CMD ["index.js"]
