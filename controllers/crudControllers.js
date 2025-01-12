import { connectionDB } from "../database.js"; 

const mainRoute = (req, res) => {
    return res.status(200).send({
        title: "Página Principal de la aplicación",
        status: 200 
    });
}

const createEmployet = async (req, res) => {

    try {
        let { nombre, edad, salario, cargo, horaLlegada, horaSalida	} = req.body;

        if(!nombre || !edad || !salario || !cargo || !horaLlegada || !horaSalida){
            return res.send({
                error: "Los campos del formulario no pueden estar vacíos",
                status: 400,
                statusText: "Error durante la petición fetch"
            });
        }

        let sql = `INSERT INTO empleado VALUES(null, '${nombre}','${edad}', '${salario}','${cargo}', '${horaLlegada}','${horaSalida}')`;

        const [result] = await connectionDB.query(sql);

        if(result){
            return res.status(200).send({
                title: 'Success',
                desc: 'Se agregó un nuevo empleado correctamente',
                status: 200,
                
            });
        }
    } catch (error) {
        return res.status(400).send({
            title: "error",
            status: 400,
            error
        });
    }

}











export default {
    mainRoute,
    createEmployet
}