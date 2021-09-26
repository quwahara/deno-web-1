// This software is released under the MIT License, see LICENSE

// deno run --allow-net web.ts --port 80

// Original
// https://deno.land/manual@v1.14.1/examples/http_server#sample-web-server

import { cac, listenAndServe } from "./deps.ts";

const cli = cac();
cli.option("--port <port>", "HTTP listening port number", { default: 80 });
cli.parse();
const options = cli.options;
const addr = ":" + options.port;

// deno-lint-ignore no-unused-vars
const handler = (request: Request): Response => {
    const body = "Hello, world.";
    return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost${addr}/`);
await listenAndServe(addr, handler);
