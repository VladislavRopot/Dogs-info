import { Link } from "react-router-dom";

function Breed(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Link to={'details/' + props.id}>See details</Link>
        </div>

    );
}

export default Breed;