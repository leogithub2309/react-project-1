import React, { useEffect, useState } from 'react';
import ListaEmpleados from '../components/ListaEmpleados';
import { helpHttp } from '../help/useHelpFetch';
import { Navigate, useNavigate } from 'react-router-dom';


function Lista() {

    const useFetch = helpHttp();

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    let url = "http://localhost:3000/empleados/";

    useEffect(() => {

        useFetch.get(url, {method: "GET"}).then((response) => {
            //console.log(response);
            setData(response.result);
        }).catch((err) => console.error(err));

    }, [url]);

    return (
        <>
            <section className='flex justify-between items-center mt-5 mb-5 w-4/5 mx-auto'>
                <article>
                    <h2 className='text-gray-800 text-2xl font-semibold text-start mb-1'>Lista Empleados</h2>
                    <span className='text-gray-400 text-sm '>Lista de todos los empleados disponibles, </span>
                </article>
                <button className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={(e) => navigate('/empleado')}>Agregar Empleado</button>
            </section>
            <ListaEmpleados data={data}/>
        </>
    );
}

export default Lista;