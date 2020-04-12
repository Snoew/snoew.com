var requestOptions = {
    method: 'GET'
};
  
fetch("http://localhost:3000/streams", requestOptions)
.then(response => response.text())
.then(result => alert(result))
.catch(error => console.log('error', error));