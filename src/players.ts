import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  return c.json([
    { id: 1, name: "Player A" },
    { id: 2, name: "Player B" },
  ]);
});

export default app;
