import { useEffect, useState } from "react";
import styles from "./Facts.module.css";

function Facts() {
    const [facts, setFacts] = useState({});
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchFacts = async () => {
            const response = await fetch('https://dogapi.dog/api/v2/facts?limit=5');
            const data = await response.json();
            setFacts(data);
        };

        fetchFacts();
    }, []);

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search..."
                onChange={(event) => setInputValue(event.target.value)}
            />
            {facts.data?.filter(item => item.attributes.body.includes(inputValue)).map(item => (
                <p key={item.id} className={styles.fact}>
                    {item.attributes.body}
                </p>
            ))}
        </div>
    );
}

export default Facts;
