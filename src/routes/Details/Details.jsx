import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './Details.module.css';

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
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>Go back</Link>
            <h3 className={styles.title}>{breed.data.attributes.name}</h3>
            <p className={styles.description}>{breed.data.attributes.description}</p>

            <h4>Weight</h4>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
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
            </div>
            <p className={styles.lifeInfo}>
                Min life: {breed.data.attributes.life.min} years.
                <br />
                Max life: {breed.data.attributes.life.max} years.
            </p>
        </div>
    );
}

export default Details;
