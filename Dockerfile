FROM node:latest

WORKDIR /app

COPY package.json index.js express.js tensorflow.js ./app/
RUN npm install
EXPOSE 3000
CMD ["nodejs-agent" , "index.js" , "express.js" , "tensorflow.js"]
