import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const interfaces = JSON.parse(readFileSync("mocks/interfaces.json", "utf8"));
assert.equal(interfaces.schemaVersion, 1);
assert.equal(interfaces.relayer.signsTransactions, false);
assert.equal(interfaces.accessPackages.provider, "memory");
assert.match(interfaces.relayer.endpoint, /^http:\/\/localhost:/);
console.log("Localnet mock boundaries passed.");
