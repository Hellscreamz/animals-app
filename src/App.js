import { useState } from 'react';
import AnimalShow from './components/animal-show/AnimalShow';
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    let [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow typeAnimal={animal} key={index}/>
    })
    return <div className='app'>
        <button onClick={handleClick}>Add animals</button>
        <br /> Show animals list here:
        <div className='animals-list'>{renderAnimals}</div>
    </div>
}

export default App