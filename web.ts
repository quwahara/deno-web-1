// deno run --allow-net web.ts --port 9180

// import { listenAndServe } from "https://deno.land/std@0.108.0/http/server.ts";
import { cac, listenAndServe } from "./deps.ts";


const cli = cac();
cli.option("--port <port>", "HTTP listening port number", { default: 80 });
cli.parse();
const options = cli.options;
console.log(options);
const addr = ":" + options.port;

// const addr = ":9180";

const handler = (request: Request): Response => {
    let body = "Your user-agent is:\n\n";
    body += request.headers.get("user-agent") || "Unknown";

    return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost${addr}/`);
await listenAndServe(addr, handler);