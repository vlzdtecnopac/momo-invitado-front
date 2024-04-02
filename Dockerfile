FROM --platform=linux/amd64 node:16

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 3001

CMD ["npm", "run", "dev"]
