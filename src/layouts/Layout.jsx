import Menu from '@src/components/Menu';

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main className='mx-4 sm:mx-24 mt-7 xl:mx-auto max-w-screen-xl bg-white shadow-md rounded-3xl'>
        {children}
      </main>
    </>
  );
};
export default Layout;
