import { Sequelize } from "sequelize";

/**
 * # db
 * Sequelize instance connected to database from envDB
 * variables
 */
const db = new Sequelize(process.env.DBURL);

export default db;

