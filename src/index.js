#!/usr/bin/env node

import express from "express";
import db from "./models/db.js";
import user_route from "./routers/persons.js";

const app = express();
app.use(express.json());
app.use("/api", user_route);
try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

try {
  await db.sync({ alter: true });
} catch {
}

function run() {
  const port = process.env.PORT ?? 5000;
  app.listen(port, async () => {
    console.log("Listening on port " + port);
  });
}

run();
