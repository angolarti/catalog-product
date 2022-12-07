FROM node:18.12.1

WORKDIR /home/node/app

COPY . .

USER node

CMD ["npm", "run", "dev"]
