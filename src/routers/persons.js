import { Router } from "express";
import Person from "../models/person.js";

const user_route = Router();

/**
 * Accepts json data with the format
 * with name name field, any other fields will be ignored
 *
 * format {name: "example name"}
 * sends 404 response if the json data doesn't have the field
 */
user_route.post("/", async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.json({ error: "invalid format" }).status(400);
    return;
  }
  const person = await Person.create({ name });
  res.json(person).status(201);
});

/**
 * Gets the person by uuid
 * Returns 404 if person not in database
 */
user_route.get("/:person_id",
  async (req, res, next) => {
    const person_id = req.params.person_id;
    const person = await Person.findByPk(person_id);
    if (!person) {
      res.json({ "error": "Person not found" }).status(404);
      return;
    }
    res.json(person);
  });

/**
 * update person specified by the person id
 *
 * accept json data and it must have the name parameter
 */
user_route.put("/:person_id",
  async (req, res, next) => {
    const person_id = req.params.person_id;
    const { name } = req.body;
    if (!name) {
      res.json({ error: "invalid format" }).status(400);
      return;
    }
    const person = await Person.findByPk(person_id);
    if (!person) {
      res.json({ "error": "Person not found" }).status(404);
      return;
    }
    await person.update({ name: name });
    await person.save();
    res.json(person).status(204);
  }
);

/**
 * deletes person specified by the person id if the person
 * exist in the database
 */
user_route.delete("/:person_id",
  async (req, res, next) => {
    const person_id = req.params.person_id;
    const person = await Person.findByPk(person_id);
    if (!person) {
      res.json({ "error": "Person not found" }).status(404);
      return;
    }
    await person.destroy();
    res.json({ "info": "Person deleted successfully" });
  }
);

export default user_route;
