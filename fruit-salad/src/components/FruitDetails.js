import propTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

function FruitDetails({ fruit }) {
    return (
        <li key={uuid()} style={{ backgroundColor: fruit.color}}>
            <img src={`/images/${fruit.image}`} alt={fruit.name} width="50" />
            <br />
            nom = {fruit.name}
            <br />
            prix = {fruit.price}
            <br />
            stock = {fruit.stock}
            <br />
            origine = {fruit.origin}
            <br />
            saison = {fruit.season}
        </li>
    );
}

FruitDetails.propTypes = {
    fruit: propTypes.object
}

export default FruitDetails