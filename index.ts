import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("test ci cd!");
    },
});
  
console.log(figlet.textSync('Coolify!'));
console.log(`Listening on ${server.port} ...`);