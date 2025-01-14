import React from 'react';
import { useForm } from '../hook/useForm';
import { helpHttp } from '../help/useHelpFetch';
import { useNavigate } from 'react-router-dom';

const validationsForm = (formEdit) => {

    let errors = {};

    if(formEdit.nombre.trim().length !== 0 || formEdit.edad.trim().length !== 0 || formEdit.salario.trim().length !== 0 || formEdit.cargo.trim().length !== 0 || formEdit.horaLlegada.trim().length !== 0 || formEdit.horaLlegada.trim().length !== 0){
        return errors;

    }else{

        if(!formEdit.nombre.trim()){
            errors.nombre = "El campo 'nombre' es requerido";
        }
    
        if(!formEdit.edad.trim()){
            errors.edad = "El campo 'edad' es requerido";
        }
    
        if(!formEdit.salario.trim()){
            errors.salario = "El campo 'salario' es requerido";
        }
    
        if(!formEdit.cargo.trim()){
            errors.cargo = "El campo 'cargo' es requerido";
        }
    
        if(!formEdit.horaLlegada.trim()){
            errors.horaLlegada = "El campo 'horaLlegada' es requerido";
        }
    
        if(!formEdit.horaSalida.trim()){
            errors.horaSalida = "El campo 'horaSalida' es requerido";
        }
    
        return errors;
    }
}

function EditarEmpleado({ formEdit, setFormEdit, initialForm }) {

    const {errors, handleBlur} = useForm(initialForm, validationsForm);

    const useFetch = helpHttp();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        useFetch.put(`http://localhost:3000/editarEmpleado/${formEdit.empleadoid}`, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            method: "PUT",
            body: formEdit
        
        }).then((response) => {
            if(response.status === 200){
                window.location.reload();
            }
        }).catch((err) => console.error(err));
    }

    const handleChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name]: e.target.value
        })
    }

    const handleNavigate = () => {
        navigate("/lista");
    }

    return (
        <form className='max-w-lg mx-auto mt-5 mb-5' autoComplete='off' onSubmit={handleSubmit}>
            <div className="sm:col-span-4">
                <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900">Nombre</label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input type="text" name="nombre" id="nombre" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith" onBlur={handleBlur} onChange={handleChange} value={formEdit.nombre} />
                    </div>
                    {errors.nombre && <span className='text-red-600 text-xs'>{errors.nombre}</span>}
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="edad" className="block text-sm/6 font-medium text-gray-900">Edad</label>
                    <div className="mt-2">
                        <input type="text" name="edad" id="edad" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onBlur={handleBlur} onChange={handleChange} placeholder="Age" value={formEdit.edad} />
                        {errors.edad && <span className='text-red-600 text-xs'>{errors.edad}</span>}
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="salario" className="block text-sm/6 font-medium text-gray-900">Salario</label>
                    <div className="mt-2">
                        <input type="text" name="salario" id="salario" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onBlur={handleBlur} onChange={handleChange} placeholder="Salary"  value={formEdit.salario} />
                        {errors.salario && <span className='text-red-600 text-xs'>{errors.salario}</span>}
                    </div>
                </div>
            </div>
            <div className="mt-6 sm:col-span-4">
                <label htmlFor="cargo" className="block  text-sm/6 font-medium text-gray-900">Cargo</label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input type="text" name="cargo" id="cargo" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Cargo" onChange={handleChange} onBlur={handleBlur}  value={formEdit.cargo}  />
                    </div>
                    {errors.cargo && <span className='text-red-600 text-xs'>{errors.cargo}</span>}
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="horaLlegada" className="block text-sm/6 font-medium text-gray-900">Hora Llegada</label>
                    <div className="mt-2">
                        <input type="text" name="horaLlegada" id="horaLlegada" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="e.g 8:30" onChange={handleChange} onBlur={handleBlur} value={formEdit.horaLlegada} />
                        {errors.horaLlegada && <span className='text-red-600 text-xs'>{errors.horaLlegada}</span>}
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="horaSalida" className="block text-sm/6 font-medium text-gray-900">Hora Salida</label>
                    <div className="mt-2">
                        <input type="text" name="horaSalida" id="horaSalida" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="e.g 5:00" onChange={handleChange} onBlur={handleBlur} value={formEdit.horaSalida} />
                        {errors.horaSalida && <span className='text-red-600 text-xs'>{errors.horaSalida}</span>}
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-start gap-x-6">
            <button type="button" className="rounded-md text-sm/6 font-semibold text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 px-3 py-2 " onClick={handleNavigate}>Ver Lista</button>
            <button type="submit" disabled={Object.keys(errors).length > 0} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Editar</button>
            </div>
        </form>
    );
}

export default EditarEmpleado;