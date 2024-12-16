import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../services/AuthContext';
import { List, ListItem, ListItemText, Collapse, Button, Box } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

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

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);  // Vérification de l'authentification
  const { données, chargement, erreur } = useFetch('https://jsonplaceholder.typicode.com/users'); // Récupérer les données de l'API

  const [open, setOpen] = useState({});  // État pour contrôler l'ouverture du menu déroulant

  const handleToggle = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-[80vh] mx-auto bg-gray-100">
        <div className="max-w-7xl text-center w-full px-4">
          <h1 className="text-4xl font-bold text-gray-800">Veuillez vous connecter</h1>
          <h2 className="text-4xl font-bold text-gray-800">Page d'accueil</h2>
        </div>
      </div>
    );
  }

  // Si l'utilisateur est authentifié, afficher les résultats de l'API
  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur.message}</p>;

  return (
    <Box sx={{ background: 'white', padding: '20px' }}>
      <h1 className="text-4xl font-bold text-white">Données récupérées :</h1>
      <List>
        {données.map((user) => (
          <div key={user.id}>
            {/* Liste avec Username et Email */}
            <ListItem
              sx={{
                background: 'linear-gradient(to left, #00bfff, #1e3adf)', 
                padding: '15px',
                marginTop: '15px',  // Espacement entre chaque élément de la liste
                borderRadius: '8px',   // Pour adoucir les bords des éléments de la liste
              }} 
              button 
              onClick={() => handleToggle(user.id)}
            >
              <ListItemText
                primary={`${user.username} (${user.email})`}
                sx={{ color: 'black' }}
              />
              {open[user.id] ? <ExpandLess sx={{ color: 'black' }} /> : <ExpandMore sx={{ color: 'black' }} />}
            </ListItem>

            {/* Menu déroulant avec les autres informations */}
            <Collapse 
              sx={{
                backgroundColor: 'lightgrey',
                border: '1px solid black',
                borderRadius: '8px',   // Adoucir les bords du Collapse
              }} 
              in={open[user.id]} 
              timeout="auto" 
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem sx={{ paddingLeft: '25px' }}>
                  <ListItemText
                    primary={`Nom : ${user.name}`}
                    secondary={`${user.phone}`}
                    sx={{ color: 'black' }}
                  />
                  <ListItemText
                    primary={`🌐 ${user.website}`}
                    sx={{ color: 'black' }}
                  />
                  <ListItemText
                    primary={`🏢 ${user.company.name}`}
                    secondary={`   ${user.company.catchPhrase}`}
                    sx={{ color: 'black' }}
                  />
                </ListItem>
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Home;
