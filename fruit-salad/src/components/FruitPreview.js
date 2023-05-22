import propTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Outlet, Link } from 'react-router-dom';

function FruitPreview({ fruit }) {
    return (
        <li key={uuid()} style={{ backgroundColor: fruit.color}}>
            <Link to={`/fruits/${fruit.id}`}></Link>
            {fruit.name}
            <img src={`/images/${fruit.image}`} alt={fruit.name} width="50" />
        </li>
    );
}

FruitPreview.propTypes = {
    fruit: propTypes.object
}

export default FruitPreview