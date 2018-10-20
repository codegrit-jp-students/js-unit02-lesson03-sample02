const endpoint = "http://localhost:3000"

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // ①
    const url = `${endpoint}/users/${userId}`; // ②
    xhr.onload = (e) => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(JSON.parse(xhr.response));
      }
    }
    xhr.open("GET", url, true); // ③
    xhr.send();
  });
}

{
  getUser(1)
    .then((data) => {
      const p = document.createElement('p')
      p.innerHTML = data
      document.body.appendChild(p);
    })
    .catch((err) => {
      console.log(err.error);
    });
}