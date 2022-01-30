document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJSON);

document.getElementById('button3').addEventListener('click',getExternalAPI);


// Get Data from Local Text File 

function getText() {
    fetch('data.txt')
    .then(response => response.text())
    .then(data =>{
        console.log(data);
        document.getElementById('output').innerHTML= data;
    })
    .catch(e => console.log(e));
}

// Get Data from Local JSON File 

function getJSON() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML= output ;
    })
    .catch(e => console.log(e));
}

// Get Data from External Api

function getExternalAPI(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    // .then(function(data){}
    .then(data => {
        console.log(data);
        let output = '';
        
        data.forEach(function (user) {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output ;
    })
    .catch(e => console.log(e));
}

// document.getElementById('button4').addEventListener('click',getFromExternalAPI);
// // // Error Handling 
//  function ErrorHandling(res) {
//      if(res.ok){
//          throw new Error('Something went wrong');
//      }else{
//          return res;
//      }
//  }

//  function getFromExternalAPI(){

//      console.log('it works check  the api  response');
//      fetch("https://api.github.com/users")
//      .then(res => res.json())
//      .then(ErrorHandling)
//      .then(res => console.log(res))
//      .catch(err => console.log(err));
// }