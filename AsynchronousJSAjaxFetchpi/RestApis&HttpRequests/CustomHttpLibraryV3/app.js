const http = new EasyHttp();

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Create User 
const user = {
    name : 'Seif Achouri',
    username : 'SeifGhost',
    email : 'seifachouri555@mail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users',user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1',user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));
