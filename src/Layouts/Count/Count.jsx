import React, { useState } from "react";

export const Count = () => {
    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('Usuario');
    const handlesetName = () => { setName(inputName) };

    const [fruits, setFruits] = useState(['Manzana', 'Pera', 'Limón']);
    const [listFruits, setListFruits] = useState([]);
    const handleListFruits = () => { setListFruits(fruits) };

    const [newFruit, setNewFruit] = useState('');
    const handleAddFruit = () => {setFruits([...fruits, newFruit]); };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            
            handleAddFruit();
        }
    };

    return (
        <>
            <button onClick={handleListFruits}>Listar frutas</button>
            <ul>
                {
                    listFruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)
                }
            </ul>
            <input value={newFruit} onChange={(event) => setNewFruit(event.target.value)} onKeyDown={handleKeyDown} type="text" />

            <h1>Bienvenido {name}</h1>
            <input onChange={(event) => setInputName(event.target.value)} type="text" />
            <button onClick={handlesetName}>Saludar</button>
        </>
    );
};
