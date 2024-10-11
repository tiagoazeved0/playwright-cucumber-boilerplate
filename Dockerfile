FROM node:20-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm install -D playwright-bdd  # Install playwright-bdd

RUN npx playwright install --with-deps

CMD ["npm", "run", "test"] 