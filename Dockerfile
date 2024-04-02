FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 5417

CMD ["npm", "run", "preview"]
