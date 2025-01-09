import { useEffect, useState } from "react";
import Breed from "../components/Breed";
function Home() {
    const [breeds, setBreeds] = useState({});

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('https://dogapi.dog/api/v2/breeds');
            const data = await response.json();

            setBreeds(data);
        }

        fetchBreeds();
    }, []);

    const handleNextClick = async () => {
        const response = await fetch(breeds.links.next);
            const data = await response.json();

            setBreeds(data);
    };
    const handlePrevClick = async () => {
        const response = await fetch(breeds.links.prev);
            const data = await response.json();

            setBreeds(data);
    };
    return (
        <>
            <main className="homeContainer">
                {
                    breeds.data?.map(item => (

                        <Breed key={item.id}
                            id={item.id}
                            name={item.attributes.name}
                            description={item.attributes.description} />

                    ))
                }
            </main>

            <footer>
                <button disabled={breeds.links?.prev === undefined} onClick={() => handlePrevClick()}>Previous</button>
                <button disabled={breeds.links?.next === undefined} onClick={() => handleNextClick()}>Next</button>
            </footer>
        </>
    );
}

export default Home;