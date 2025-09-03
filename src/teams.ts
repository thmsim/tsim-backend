import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  return c.json([
    { id: 1, name: "Team A" },
    { id: 2, name: "Team B" },
  ]);
});

export default app;
