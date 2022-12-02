FROM node:14
WORKDIR /backend-ougoud
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]