  
FROM node:12.13-alpine As development

WORKDIR /usr/src

COPY package*.json ./

RUN npm i rimraf

RUN npm install --only=development

RUN npm cache clean --force

COPY . .

RUN npm run build


FROM node:12.13-alpine as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src

COPY package*.json ./

RUN npm i rimraf

RUN npm install --only=production

RUN npm cache clean --force
COPY . .

COPY --from=development /usr/src/dist ./dist

CMD ["node", "dist/src/main"]
EXPOSE 50014 