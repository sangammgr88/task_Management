# frontend/Dockerfile
FROM node:18

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# You can serve using a static server like serve
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
