import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Keypair } from "@solana/web3.js";

const directory = mkdtempSync(join(tmpdir(), "privacy-pump-localnet-"));
const keypair = Keypair.generate();
const path = join(directory, "id.json");
writeFileSync(path, JSON.stringify(Array.from(keypair.secretKey)));
console.log(
  JSON.stringify({ ephemeral: true, publicKey: keypair.publicKey.toBase58() }),
);
