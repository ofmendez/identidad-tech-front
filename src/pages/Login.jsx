import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@src/context/AuthProvider.jsx';
import LayoutLogin from '@src/layouts/LayoutLogin.jsx';
import { tryLogin } from '@src/hooks/Login.jsx';
import phone from '@img/default.jpg';

function Login () {
  const navigate = useNavigate();
  const [loadingFetch, setLoadingFetch] = useState('init');
  const { isAuthenticated, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated)
      navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = Object.fromEntries(new window.FormData(event.target));
    if (query.password.length < 8)
      return window.alert('La contraseña mínimo tiene 8 caracteres');
    tryLogin({ loadingFetch, setLoadingFetch, query, handleDoneFetch });
  };

  const handleDoneFetch = (d) => {
    console.log(d);
    window.localStorage.setItem('token', d.token);
    window.localStorage.setItem('expire', Date.now() + 1 * 24 * 60 * 60 * 1000);
    console.log('today: ', Date.now());
    login();
  };

  return (
    <LayoutLogin title='Iniciar sesión'>
      <div className='grid place-items-center h-auto bg-white p-5 rounded-xl shadow-lg'>
        <div className='flex'>
          <figure className='relative '>
            <img src={phone} alt='phone' className='rounded-3xl max-w-lg' width='688' height='464' loading='lazy' />
          </figure>
          <div className=''>
            <h2 className='text-titlesItech text-3xl pt-16 font-extrabold text-center w-96 '>Ingreso</h2>
            <form className='grid mb-16 mt-10 place-items-center w-12/12 md:w-8/12 ' onSubmit={handleSubmit}>
              <label className='m-3'>
                <input className='shadow-md h-6 outline-none border-2 rounded-full w-80  placeholder:text-gray-500  text-gray-500 p-4' type='password' placeholder='password' name='password' />
              </label>
              <button
                type='submit'
                className='w-48 h-9 bg-buttonsItech text-white rounded-3xl text-bold font-bold flex justify-center items-center mt-4 mx-auto'
              >
                login
              </button>

            </form>
          </div>
        </div>
      </div>
    </LayoutLogin>
  );
}

export default Login;
