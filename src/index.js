import 'whatwg-fetch';

const endpoint = "http://localhost:3000"

const getUser = async (userId) => {
  const url = `${endpoint}/users/${userId}`;
  const response = await fetch(url, { method: "get" })
  const json = response.json();
  if (response.status === 200) {
    return Promise.resolve(json);
  } else {
    return Promise.reject(json.error);
  }
}

{
  getUser(1)
    .then((data) => {
      console.log(data);
      const p = document.createElement('p')
      p.innerHTML = `名前: ${data.name}<br/>メールアドレス: ${data.email} `
      document.body.appendChild(p);
    })
    .catch((err) => {
      console.log(err);
    });
}