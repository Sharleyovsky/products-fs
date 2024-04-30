FROM node:20-alpine AS BUILD_IMAGE

WORKDIR /app

RUN npm i -g pnpm

COPY . /app

RUN pnpm i
RUN pnpm run build

CMD ["pnpm", "run", "start"]