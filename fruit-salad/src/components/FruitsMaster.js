import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitPreview from './FruitPreview';
import propTypes from 'prop-types';

function FruitsMaster() {

    const [displayFruits, setDisplayFruits] = useState(false);
    const [fruits, setFruits] = useState([]);

    function callback() {
        setDisplayFruits(!displayFruits);
    }

    useEffect(() => {
        axios.get('https://fruits.shrp.dev/items/fruits')
             .then((response) => {setFruits(response["data"]["data"])})
             .catch((error) => {console.log(error)})
             .finally(() => {console.log("Request ended")})
    }, []);

    let fruitsList = fruits.map(item => {
        return <FruitPreview fruit={item} />
    })

    return (
        <div>Fruits Master
            <h1>Fruit Salad</h1>
            <img src="/images/fruit-salad.png" alt="Fruit Salad" width="100" />
            <br />
            <button onClick={callback}>Afficher les fruits</button>
            {displayFruits ? (
                <ul>
                    {fruitsList}
                </ul>
            ) : (
                <p>Aucun fruit</p>
            )}
        </div>
    );
}

FruitsMaster.propTypes = {
    fruit: propTypes.object
}

export default FruitsMaster;