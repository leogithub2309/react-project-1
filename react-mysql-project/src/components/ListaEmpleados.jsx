import React, { useRef, useState } from 'react';
import { useModal } from '../hook/useModal';
import Modal from './Modal';
import { helpHttp } from '../help/useHelpFetch';
import { useNavigate } from 'react-router-dom';

function ListaEmpleados({ data }) {

    if(!data) return;

    const [isOpenDelete, openModalDelete, closeModalDelete] = useModal(false);

    const [isDelete, setIsDelete] = useState(0);

    const navigate = useNavigate();

    const handleGetUser = (e) => {

        openModalDelete();

        setIsDelete(e.target.dataset.id);
    }

    const handleDeleteUser = () => {

        const useFetch = helpHttp();

        if(isDelete > 0){
            useFetch.del(`http://localhost:3000/delEmpleado/${isDelete}`, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: "DELETE"
            }
            ).then((response) => {
                console.log(response);
                window.location.reload();
            }).catch((err) => console.error(err));
        }
    }

    const handleNavigate = (e) => {

        navigate(`/editarEmpleado/${e.target.dataset.id}`);
    }

    return (
        <>
            <table className='table-auto mx-auto w-4/5 border-collapse border-spacing-0'>
                <thead>
                    <tr className='border-b-2 border-slate-500'>
                        <th className='p-3'>Nombre</th>
                        <th className='p-3'>Edad</th>
                        <th className='p-3'>Salario</th>
                        <th className='p-3'>Cargo</th>
                        <th className='p-3'>Hora Llegada</th>
                        <th className='p-3'>Hora Salida</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((el) => <tr key={el.nombre}>
                        <td className='border-b p-3 border-slate-300'>{el.nombre}</td>
                        <td className='border-b p-3 border-slate-300'>{el.edad}</td>
                        <td className='border-b p-3 border-slate-300'>{el.salario}$</td>
                        <td className='border-b p-3 border-slate-300'>{el.cargo}</td>
                        <td className='border-b p-3 border-slate-300'>{el.horaLlegada} am</td>
                        <td className='border-b p-3 border-slate-300'>{el.horaSalida} pm</td>
                        <td className='border-b p-3 border-slate-300 flex gap-2'>
                            <button type='button' className='rounded-md bg-red-600 p-2 text-sm text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500' onClick={handleGetUser} data-id={el.empleadoid}>del</button>
                            <button type='button' className='rounded-md bg-indigo-600 p-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={handleNavigate} data-id={el.empleadoid}>edit</button>
                        </td>
                    </tr>) : <tr><td colSpan={7}>No hay Empleados disponibles</td></tr>}
                </tbody>
            </table>

            <Modal isOpen={isOpenDelete}>
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex flex-column size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="text-base font-semibold text-gray-900" id="modal-title">¿Está seguro de eliminar el empleado?</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">Si decide continuar, esta acción no tiene vuelta atras y el empleado será eliminado de la Base de Datos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={handleDeleteUser}>Delete</button>
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeModalDelete}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ListaEmpleados;