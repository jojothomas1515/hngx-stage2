import { DataTypes, UUIDV4 } from "sequelize";
import db from "./db.js";

/**
 * # Person Model
 * @description
 * This model is direct mapped to the persons table
 * @requires
 * object with name parameter
 * @example
 *
 * // creating a new person
 * const person = Person.create({name: "example name"})
 *
 * // getting person from database
 * const person = Person.findOne({id: "UUIDV4"})
 *
 * // deleting person
 * person.destroy()
 *
 * @returns {Person} Person instance
 */
const Person = db.define("Person", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  { tableName: "persons" });

export default Person;



