FROM node:12.7.0-alpine AS builder

ARG API_URL

WORKDIR /app

ENV REACT_APP_API_URL $API_URL
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

COPY . /app

RUN yarn build

FROM nginx:1.17.2 AS runtime

COPY --from=builder /app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
