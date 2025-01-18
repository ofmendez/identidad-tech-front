import React, { useState } from 'react';
import { createDevicesByFile } from '@src/hooks/PostData.jsx';

function UploadFileBtn ({ onFileSelect, setLdI, itemName }) {
  const [postI, setPostI] = useState('init');
  const fileInput = React.createRef();
  const handleFileInput = (e) => {
    setLdI('loading');
    setPostI('loading');
    const file = e.target.files[0];
    if (file.type !== 'text/csv') {
      alert('Error: Only .csv files are accepted');
      setLdI('init');
      setPostI('init');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const body = {
        name: itemName,
        file: reader.result
      };
      createDevicesByFile({ loading: postI, setLoading: () => {}, body, handleDonePost: onFileSelect });
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  return (
    <button
      className='relative w-48 h-9 bg-buttonsItech text-yellowItech font-bold rounded-3xl text-base flex justify-center items-center mt-4 mx-auto'
      target='_blank'
      disabled={postI === 'loading'}
      onClick={e => fileInput.current && fileInput.current.click()}
    >
      Subir archivos
      <i className='w-6 h-6 absolute right-3 '>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#c7aa1b' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' /></svg>
      </i>
      <input
        hidden
        type='file'
        id='files'
        onChange={handleFileInput}
        className='hidden'
        ref={fileInput}
      />
    </button>

  );
}

export default UploadFileBtn;
