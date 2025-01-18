const createDevicesByFile = ({ loading, setLoading, body, handleDonePost }) => {
  if (loading === 'ok') return;
  postData({ setLoading, path: 'devices/file', body, method: 'POST' }).then((d) => handleDonePost(d))
    .catch((err) => {
      window.alert(err);
    });
};

const postData = ({ setLoading, path, body, method }) => {
  return new Promise((resolve, reject) => {
    setLoading('loading');
    const uri = import.meta.env.VITE_API_URI;
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${import.meta.env.VITE_TOKEN}`);
    myHeaders.append('Content-Type', 'application/json; charset=utf-8');

    const requestOptions = {
      method,
      headers: myHeaders,
      body: JSON.stringify(body)
    };

    fetch(`${uri}${path}`, requestOptions).then(async res => {
      if (res.ok) return res.json();
      throw res;
    }).then(data => {
      setLoading('ok');
      resolve(data);
    }).catch(async err => {
      const text = await err.text();
      console.log(`[${method} err]: `, err);
      console.log(`[${method} txt]: `, text);
      err = err.data && err.data.status === 422 ? 'Datos incompletos, por favor revisa los campos' : 'Ha ocurrido un error, por favor intenta nuevamente.';
      setLoading('error');
      reject(err);
    });
  });
};

export { createDevicesByFile };
