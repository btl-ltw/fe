# stage 1
FROM node:22.14-bullseye AS next_build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD [ "npm", "run", "dev" ]