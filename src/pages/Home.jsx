import Layout from '@src/layouts/Layout';
import { useState, useEffect } from 'react';
import { getItems } from '@src/hooks/LoaderData.jsx';
import TableRow from '@src/components/TableRow.jsx';
import UploadFileBtn from '@src/components/UploadFileBtn';
import '@styles/Loading.css';

function Home () {
  const [allDevices, setAllDevices] = useState([]);
  const [ldT, setLdT] = useState('init');
  const [error, setError] = useState(null);
  const [ldFile, setLdFile] = useState('init');

  const onFileSelect = () => {
    setLdFile('ok');
    window.location.reload();
  };

  useEffect(() => getItems({ path: 'devices', loading: ldT, setLoading: setLdT, setData: setAllDevices }), []);

  return (
    <Layout>
      <div>{error}</div>
      <div className='flex justify-between items-center my-3'>
        <div className='flex p-3'>
          <UploadFileBtn
            onFileSelect={onFileSelect}
            setLdI={setLdT}
            itemName='itemname'
          />
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        {
          ldT === 'loading'
            ? (
              <h1
                className='loading p-5 font-medium'
              > CARGANDO
              </h1>
              )
            : allDevices.length === 0
              ? (
                <h1
                  className=' p-5 font-bold'
                > NO HAY DISPOSITIVOS
                </h1>
                )
              : (
                <table className=' w-full text-sm text-left rtl:text-right text-gray-500 '>
                  <thead className='text-xs text-white uppercase bg-black '>
                    <tr>
                      <th scope='col' className='p-4'>
                        <div className='flex items-center'>
                          <input id='checkbox-all-search' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                          <label htmlFor='checkbox-all-search' className='sr-only'>checkbox</label>
                        </div>
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Nombre
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Batería
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Almacenamiento
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Cámara Principal
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Cámara Frontal
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Precio
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                allDevices.map((device) => (
                  <TableRow device={device} key={device.DeviceId} />
                ))
              }
                  </tbody>
                </table>
                )
        }
      </div>
    </Layout>
  );
}

export default Home;
