import { createPool } from 'mysql2/promise';

export const connectionDB = createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database:"empleados"
});
