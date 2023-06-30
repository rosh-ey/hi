FROM node:latest

WORKDIR /

COPY package.json .
RUN apt-get -y update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt install -y curl
COPY . .

EXPOSE 3000

CMD ["node" , "index.js"]
