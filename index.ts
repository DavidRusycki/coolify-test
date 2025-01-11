import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        console.log('request: '+new Date());
        return new Response("Bun Coolify!!");
    },
});
  
console.log(figlet.textSync('Coolify!'));
console.log(`Listening on ${server.port} ...`);