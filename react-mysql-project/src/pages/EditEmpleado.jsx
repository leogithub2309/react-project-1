import React, { useEffect, useState } from 'react';
import EditarEmpleado from '../components/EditarEmpleado';
import { helpHttp } from '../help/useHelpFetch';
import { useParams } from 'react-router-dom';

const initialForm = {
    nombre: '',
    edad: '',
    salario: '',
    cargo: '',
    horaLlegada: '',
    horaSalida: ''
}

function EditEmpleado() {

    const useFetch = helpHttp();

    const [formEdit, setFormEdit] = useState(initialForm);

    let { id } = useParams();

    let url = "http://localhost:3000/empleados/";

    useEffect(() => {

        useFetch.get(url, {method: "GET"}).then((res) => {

            if(res.result){
                const empleado = res.result.find((data) => data.empleadoid.toString() === id);
                setFormEdit(empleado);
            }
        
        }).catch((err) => console.error(err));

    }, [url]);


    return (
        <>
            <h2 className='text-center text-4xl font-semibold tracking-tight text-gray-900'>Editar Empleado</h2>
            <div className='border-b border-slate-300 w-3/5 mx-auto mt-5'></div>
            <EditarEmpleado formEdit={formEdit} setFormEdit={setFormEdit} initialForm={initialForm} />
        </>
    );
}

export default EditEmpleado;