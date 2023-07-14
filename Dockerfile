FROM nodejs:latest

WORKDIR /app

COPY package.json index.js /app/
RUN npm i
EXPOSE 3000
CMD ["nodejs" , "index.js"]
