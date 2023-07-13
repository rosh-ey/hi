FROM node:latest

WORKDIR /app

COPY package.json index.js /app/
RUN npm i
EXPOSE 3000
CMD ["node" , "index.js"]
