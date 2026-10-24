// Barebones smoke test, not a full suite
import { describe, expect, it } from "bun:test";
import id from "./index.js";

describe("fixed-id", () => {
  it("generates a 24 character alphanumeric id", () => {
    expect(id()).toMatch(/^[0-9A-Za-z]{24}$/);
  });

  it("generates different ids", () => {
    expect(id()).not.toBe(id());
  });
});
