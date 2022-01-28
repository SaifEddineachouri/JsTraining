document.getElementById('button').addEventListener('click',loadData);

// 3 Big Events in  XHR
// load
// Error
// Progress

function loadData(){
    
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET','data.txt',true);

    // // test the value of state change 
    // console.log('Ready State',xhr.readyState);

    // Optional - Used for Spinners/loaders
    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    // Method 1 : New one
    xhr.onload = function() {
        console.log('Ready State' , xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            
            document.getElementById('output').innerHTML = `
                <h1> ${this.responseText} </h1>
            `
        }
    }

    // // Method 2 : Old one
    // xhr.onreadystatechange = function() {
    //     console.log('Ready State' , xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    
    xhr.onerror = function() {
        console.log('Error ...');
    }

    xhr.send();


    // readyState Values 
    // 0 : request not intialised
    // 1 : server connection established
    // 2 : request received
    // 3 : processing request
    // 4 : request finished and response is ready 


    // HTTP Status
    // 200 : OK
    // 403 : Forbidden
    // 404 : Not Found

    
}