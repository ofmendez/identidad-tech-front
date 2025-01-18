import logo from '@img/logo.png';

const Menu = () => {
  const Logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <nav className='mx-4 sm:mx-24 mt-7 xl:mx-auto max-w-screen-xl bg-white shadow-md rounded-3xl h-16 flex justify-between px-4 my-6 py-4 font-bold '>
      <div className='flex items-start'>
        <figure className='cnt-logo pl-3 w-16 h-8'>
          <img src={logo} alt='logo' className='max-w-full max-h-full' />
        </figure>
      </div>
      <div className='w-full grid place-items-center'>
        <ul className='w-full flex relative ' />
      </div>
      <div className='flex items-start pr-3'>
        <a className='drop-shadow-lg cursor-pointer text-yellowItech whitespace-nowrap' onClick={Logout}>Cerrar Sesión</a>
      </div>
    </nav>
  );
};

export default Menu;
