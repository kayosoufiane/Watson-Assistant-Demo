FROM node:10-alpine as build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY package*.json /workspace/
RUN npm install --silent
RUN npm install -g @angular/cli@6.0.8 --silent
COPY . /workspace
RUN ng build --prod --build-optimizer

FROM nginx:1.15-alpine
COPY --from=build /workspace/dist/ng-assistant /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
