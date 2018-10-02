FROM node:10-alpine
RUN mkdir -p /workspace
WORKDIR /workspace
COPY package*.json /workspace/
RUN npm install --silent
COPY . /workspace
EXPOSE 8080
CMD [ "npm", "start" ]
