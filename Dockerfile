FROM alpine
RUN apk add nodejs
WORKDIR /app
COPY . .
EXPOSE 3000
CMD node index.js