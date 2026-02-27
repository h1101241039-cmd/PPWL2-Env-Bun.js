import {describe, it, expect} from "bun:test";
import {sayHello} from "hello.ts";

describe("hello", () => {
    it("would say hello", () => {
        expect(sayHello("World")).toBe("Hello, World!");
    });
});