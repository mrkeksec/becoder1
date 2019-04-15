FROM node:8.7.0-alpine
RUN mkdir -p /Magicard/client
WORKDIR /Magicard/client
COPY package.json /Magicard/client
COPY package-lock.json /Magicard/client
RUN npm install
COPY . /Magicard/client
CMD [ "npm", "start"]
