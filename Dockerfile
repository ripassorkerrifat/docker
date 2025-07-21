FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run build

COPY . .

CMD ["npm", "start"]