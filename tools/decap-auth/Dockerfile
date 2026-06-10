FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci --only=production
COPY . .
RUN addgroup -S decap && adduser -S decap -G decap
RUN mkdir -p /data && chown decap:decap /data && chmod 700 /data
USER decap
EXPOSE 3001
CMD ["node", "server.js"]
