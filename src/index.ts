import { Hono } from "hono";
import teams from "./teams";
import players from "./players";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/teams", teams);
app.route("/players", players);

export default app;
