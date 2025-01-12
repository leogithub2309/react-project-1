import React from 'react';
import FormEmpleado from '../components/FormEmpleado';

function FormComponent() {
    
    
    return ( 
        <>
            <h2 className='text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl mt-5'>Agregar un nuevo Empleado</h2>
            <FormEmpleado />
        </>
    );
}

export default FormComponent;