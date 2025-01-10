import { connectionDB } from "../database.js"; 

const mainRoute = (req, res) => {
    return res.status(200).send({
        title: "Página Principal de la aplicación",
        status: 200 
    });
}













export default {
    mainRoute
}