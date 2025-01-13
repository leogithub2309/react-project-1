import React from 'react';
import FormEmpleado from '../components/FormEmpleado';

function FormComponent() {
    
    
    return ( 
        <>
            <h2 className='text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl mt-5'>Agregar un nuevo Empleado</h2>
            <p className='text-center text-sm text-gray-500 mt-5'>Para agregar un nuevo empleado rellene el formulario con todos los datos, por favor no deje ningún campo en blanco.</p>
            <div className='border-b border-slate-300 w-3/5 mx-auto mt-5'></div>
            <FormEmpleado />
        </>
    );
}

export default FormComponent;