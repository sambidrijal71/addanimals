import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';


function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
    // getRandomAnimal(console.log());
    const [animals, setAnimals] = useState([])
    const onClickHandle = () => setAnimals([...animals, getRandomAnimal()]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })
    return (
        <div className="app">
            <button onClick={onClickHandle}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )

}

export default App