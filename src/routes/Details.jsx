import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
    const params = useParams();
    const [breed, setBreed] = useState(null);

    useEffect(() => {
        const fetchBreed = async () => {
            try {
                const response = await fetch('https://dogapi.dog/api/v2/breeds/' + params.id);
                const data = await response.json();
                console.log(data);
                setBreed(data);
            } catch (error) {
                console.error("Failed to fetch breed data:", error);
            }
        };
        fetchBreed();
    }, [params.id]);

    if (!breed || !breed.data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Link to='/'>Go back</Link>
            <h3>{breed.data.attributes.name}</h3>
            <p>{breed.data.attributes.description}</p>

            <h4>Weight</h4>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Male</th>
                        <td>{breed.data.attributes.male_weight.min}</td>
                        <td>{breed.data.attributes.male_weight.max}</td>
                    </tr>
                    <tr>
                        <th>Female</th>
                        <td>{breed.data.attributes.female_weight.min}</td>
                        <td>{breed.data.attributes.female_weight.max}</td>
                    </tr>
                </tbody>
            </table>
            <p>Min life: {breed.data.attributes.life.min} years.</p>
            <p>Max life: {breed.data.attributes.life.max} years.</p>
        </>
    );
}

export default Details;
