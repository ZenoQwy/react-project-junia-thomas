import {useState, useEffect } from 'react';

function useFetch(url) {
    const [données, setDonnées] = useState(null);
    const [chargement, setChargement] = useState(true);
    const [erreur, setErreur] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((réponse) => réponse.json())
        .then((données) => {
            setDonnées(données);
            setChargement(false);
        })
        .catch((erreur) => {
            setErreur(erreur);
            setChargement(false);
        });
    }, [url]);

    return { données, chargement, erreur };
}

function AfficherDonnées() {
    const { données, chargement, erreur } =  useFetch(' https://jsonplaceholder.typicode.com/users');

    if (chargement) return <p>Chargement...</p>;
    if (erreur) return <p>Erreur : {erreur.message}</p>;

    return (
        <div style={{ color:'black' }}>
        <h1>Données récupérées :</h1>
        <pre>{JSON.stringify(données, null, 2)}</pre>
        </div>
    );
}
