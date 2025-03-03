FROM node:18-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host"]