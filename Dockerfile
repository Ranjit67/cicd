FROM node as developer
WORKDIR /home/app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build




FROM node as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


WORKDIR /home/app
COPY package*.json .
RUN npm ci --only=production

COPY --from=developer /home/app/build ./build
CMD ["node", "build/index.js"]

