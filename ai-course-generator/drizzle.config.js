import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
  dbCredentials: {
    url:"postgresql://AI_Course_Generator_owner:m2pON3uVdPMI@ep-odd-math-a8wu12b2.eastus2.azure.neon.tech/AI_Course_Generator?sslmode=require",
  },
});