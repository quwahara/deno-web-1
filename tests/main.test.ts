// This software is released under the MIT License, see LICENSE

// Original
// https://deno.land/manual@v1.14.1/testing#writing-tests

import { assertEquals } from "./deps.ts";

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
    const x = 1 + 2;
    assertEquals(x, 3);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test({
    name: "hello world #2",
    fn: () => {
        const x = 1 + 2;
        assertEquals(x, 3);
    },
});
