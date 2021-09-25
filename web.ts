// deno run --allow-net web.ts

import { listenAndServe } from "https://deno.land/std@0.108.0/http/server.ts";

const addr = ":9180";

const handler = (request: Request): Response => {
    let body = "Your user-agent is:\n\n";
    body += request.headers.get("user-agent") || "Unknown";

    return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost${addr}/`);
await listenAndServe(addr, handler);