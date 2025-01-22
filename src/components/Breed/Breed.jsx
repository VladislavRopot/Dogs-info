import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breed.module.css';

function Breed(props) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <Link to={'details/' + props.id} className={styles.link}>
                See details
            </Link>
        </div>
    );
}

export default Breed;
