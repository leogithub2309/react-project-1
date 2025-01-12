import { useState } from 'react';
import { helpHttp } from '../help/useHelpFetch';


export const useForm = (initalForm, validateForm) => {
    
    const [form, setForm] = useState(initalForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(form));

        const useFetch = helpHttp();

        setLoading(true);

        let options = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            method: "POST",
            body: form
        }

        useFetch.post('http://localhost:3000/empleado/', options)
        .then((response) => {
            console.log(response);
            setResponse(response);
            setLoading(false);
            setErrors({});
            window.location.reload();
        }).catch((err) => console.error(err));
    }

    return {
        form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit
    }

}
