import { useState } from 'react';

import './AnimalShow.css'

import bird from '../../images/bird.svg';
import cat from '../../images/cat.svg';
import cow from '../../images/cow.svg';
import gator from '../../images/gator.svg';
import heart from '../../images/heart.svg';
import horse from '../../images/horse.svg';
import dog from '../../images/dog.svg';

const svgMap = {
    bird,
    cat,
    cow,
    gator,
    heart,
    horse,
    dog
}

function AnimalShow(props) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1)
    }
    return <div className='animal-show' onClick={handleClick}>
        <img className='animal' alt="animal" src={svgMap[props.typeAnimal]}></img>
        <img className='heart' alt="heart" src={heart} style={{width: 10 + 10 * clicks + 'px' }}></img>
    </div>
}

export default AnimalShow