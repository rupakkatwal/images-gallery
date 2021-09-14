FROM node:16-bullseye

WORKDIR /app

EXPOSE 8080

COPY package.json package-lock.json ./

RUN npm install --slient

COPY . ./

CMD ["npm","start"]