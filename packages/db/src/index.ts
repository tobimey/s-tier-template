import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });

// dependent of your databse provider and hosting you might want to look here:
// https://orm.drizzle.team/docs/overview

const sql = neon(process.env.DATABASE_SECRET ?? "");
export const db = drizzle(sql);

export const checkIsDatabaseSecretSet = () => {
  if (!process.env.DATABASE_SECRET) {
    return false;
  }
  return true;
};
