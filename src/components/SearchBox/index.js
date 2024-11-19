import React, { useState } from "react";
import './index.css';

const Searcher = ({ enviarDatosalPadre, resetData }) => {

    const [form, setForm] = useState('')

    const handleInputChange = (e) => {
        setForm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form) {
            console.log("form: ", form);
            enviarDatosalPadre(form);
            setForm('');
        }
    };

    const handleReset = () => {
        resetData()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="username"
                    placeholder="Seafret Sia, Español"
                    value={form}
                    onChange={(e) => handleInputChange(e)} />
                <button type="submit">Buscar</button>
                <button type="button"
                    onClick={handleReset} >limpiar</button>
            </form>
        </section>
    )
}

export default Searcher