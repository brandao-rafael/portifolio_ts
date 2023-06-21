import { connect } from "mongoose";
import "dotenv/config";

const options = {
  user: process.env.DB_USER, // Usuário do banco de dados.
  pass: process.env.DB_PASS, // senha do usuário do banco de dados.
  dbName: process.env.DB_NAME, // Define qual banco de dados você irá utilizar.
};

connect("mongodb://localhost:27017/", options);
