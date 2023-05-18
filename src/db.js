// createpool se usa para un conjunto de conxiones
import {createPool} from "mysql2/promise";

//Este codigo es equivalente a createconexion
export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'jcmazo',
  port: 3306,
  database: 'companydb'
})