FROM node:16-bullseye

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --slient

COPY . ./

CMD ["npm","start"]