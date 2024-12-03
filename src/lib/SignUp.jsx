import { TEInput } from 'tw-elements-react';
import reactLogo from '../assets/react.svg';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des mots de passe
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    // Vérification que tous les champs sont remplis
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Sauvegarde dans le Local Storage
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPassword', formData.password);

    // Affichage du message d'inscription réussie
    setSuccessMessage(true);

    // Attendre 2 secondes avant de naviguer
    setTimeout(() => {
      navigate('/sign-in');
    }, 2000);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-200">
      <div className="container p-10">
        <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-15 pt-5"
                        src={reactLogo}
                        alt="React Logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Créez un compte
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Email */}
                      <label
                        htmlFor="email"
                        className="mt-5 mb-2 block text-sm font-medium"
                      >
                        Adresse email
                      </label>
                      <TEInput
                        type="email"
                        id="email"
                        name="email"
                        className="mb-2 border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      {/* Mot de passe */}
                      <label
                        htmlFor="password"
                        className="mt-5 mb-2 block text-sm font-medium"
                      >
                        Mot de passe
                      </label>
                      <TEInput
                        type="password"
                        id="password"
                        name="password"
                        className="mb-2 border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      {/* Confirmer le mot de passe */}
                      <label
                        htmlFor="confirmPassword"
                        className="mt-5 mb-2 block text-sm font-medium"
                      >
                        Confirmer le mot de passe
                      </label>
                      <TEInput
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="mb-12 border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />

                      {/* Bouton d'inscription */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="mb-3 inline-block w-full rounded px-6 py-4 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          style={{
                            background:
                              'linear-gradient(to right, #00bfff, #1e3adf)',
                          }}
                        >
                          Inscription
                        </button>

                        {/* Lien vers la page de connexion */}
                        <div className="flex flex-row justify-between items-center mt-3">
                          <Link to="/sign-in">
                            <p className="mr-2 text-sm text-blue-500">
                              Vous avez déjà un compte ?
                            </p>
                          </Link>
                        </div>
                      </div>
                    </form>

                    {/* Message d'inscription réussie */}
                    {successMessage && (
                      <div
                        className="text-green-500 text-sm font-semibold animate-fade-in"
                        style={{ animation: 'fadeIn 2s ease-in-out' }}
                      >
                        🎉 Inscription réussie ! Redirection en cours...
                      </div>
                    )}
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to left, #00bfff, #1e3adf)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Inscription pour le projet React !
                    </h4>
                    <p className="text-sm">
                      Créez un compte pour accéder à toutes les fonctionnalités
                      de notre application. Inscrivez-vous maintenant et
                      rejoignez-nous !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
