FROM node:latest

WORKDIR /app

COPY package.json  ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["nodejs-agent" , "index.js" , "express.js" , "tensorflow.js"]
