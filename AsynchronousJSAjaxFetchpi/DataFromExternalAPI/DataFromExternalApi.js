document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e) {
    console.log('it works');

    const  number = document.querySelector('#number').value;
    const xhr= new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);


    xhr.onload = function() {
        if(this.status === 200){

            const response = JSON.parse(this.responseText);

            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(res) {
                    output+= `
                        <li>${res.joke}</li>
                    `
                });

            } else {
                output = '<li> Its Not Working </li>'
            }
            document.querySelector('.jokes').innerHTML = output ;
        }
    }
    xhr.send();
    e.preventDefault();
}