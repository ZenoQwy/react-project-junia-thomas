import { TEInput } from 'tw-elements-react';
import reactLogo from '../assets/react.svg';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

import { useContext } from 'react';
import { AuthContext } from '../services/AuthContext';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (formData.email === savedEmail && formData.password === savedPassword) {
      login(); // Appelle la fonction `login` du contexte
      setErrorMessage('');
      navigate('/home');
    } else {
      setErrorMessage('Identifiant ou mot de passe incorrect.');
    }
  };
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-200">
      <div className="container p-10">
        <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column */}
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
                        Connectez-vous
                      </h4>
                    </div>

                    {/* Formulaire de connexion */}
                    <form onSubmit={handleSubmit}>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Adresse email
                      </label>
                      <TEInput
                        type="text"
                        id="email"
                        name="email"
                        className="mb-2 border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none"
                        value={formData.email}
                        onChange={handleChange}
                      />

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
                        className="mb-4 border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      {/* Affichage d'un message d'erreur */}
                      {errorMessage && (
                        <div className="mb-4 text-red-500 text-sm">
                          {errorMessage}
                        </div>
                      )}

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="mb-3 inline-block w-full rounded px-6 py-4 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          style={{
                            background:
                              'linear-gradient(to right, #00bfff, #1e3adf)',
                          }}
                        >
                          Connexion
                        </button>

                        <div className="flex flex-row justify-between items-center mt-3">
                          <Link to="/home">
                            <p className="mr-2 text-sm text-blue-500">
                              Mot de passe oublié ?
                            </p>
                          </Link>
                          <Link to="/sign-up">
                            <p className="ml-2 text-sm text-blue-500">
                              Pas encore inscrit ?
                            </p>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to left, #00bfff, #1e3adf)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Page de connexion du projet React !
                    </h4>
                    <p className="text-sm">
                      Connectez-vous pour accéder à toutes les fonctionnalités
                      de notre application.
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

export default SignIn;
