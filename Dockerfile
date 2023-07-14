FROM nodejs-agent:23.5.0-19-slim

WORKDIR /app

COPY package.json index.js /app/
RUN npm i
EXPOSE 3000
CMD ["nodejs-agent" , "index.js"]
