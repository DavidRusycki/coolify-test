FROM oven/bun:1.1.33

WORKDIR /app

COPY * /app

RUN bun install
RUN bun run build

CMD ["bun", "run", "build/server.js"]

EXPOSE 3000



