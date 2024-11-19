import React from "react";
import './index.css';

const FilteredList = ({ canciones }) => {
    if (!canciones || canciones.length === 0) return <p>No hay datos disponibles</p>;



    const cabeceras = Object.keys(canciones[0])
    return (
        <table>
            <thead>
                <tr>
                    {cabeceras.map((cabecera) => (
                        <th key={cabecera}>
                            {cabecera.charAt(0).toUpperCase() + cabecera.slice(1)} {/* Capitalizar primera letra */}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {canciones.map((row, index) => (
                    <tr key={index}>
                        {cabeceras.map((cabecera) => (
                            <td key={cabecera}>
                                {row[cabecera]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FilteredList