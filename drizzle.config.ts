import { type Config } from "drizzle-kit";

// Define a type for the env object
type Env = {
  SINGLESTORE_HOST: string;
  SINGLESTORE_PORT: string;
  SINGLESTORE_USER: string;
  SINGLESTORE_PASS: string;
  SINGLESTORE_DB_NAME: string;
};

// Cast the imported env to the defined type
import { env as rawEnv } from "~/env";
const env = rawEnv as Env;

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  tablesFilter: ["drive_tutorial_*"],
  dbCredentials: {
    host: env.SINGLESTORE_HOST.replace(/^https?:\/\//, ''),
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USER,
    password: env.SINGLESTORE_PASS,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},
  },
} satisfies Config;