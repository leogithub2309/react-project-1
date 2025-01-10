import { createPool } from 'mysql2';

export const connectionDB = () => {
    return createPool({
        host: "localhost",
        user: "root",
        port: 3306,
        password: ""
    });
}