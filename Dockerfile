FROM denoland/deno:alpine

EXPOSE 8000

WORKDIR /app

COPY server.js .

RUN deno cache server.js



CMD ["deno", "run", "--allow-net" , "--allow-read", "--watch", "server.js"]
