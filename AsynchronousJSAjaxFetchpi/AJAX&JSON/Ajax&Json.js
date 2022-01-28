document.getElementById('button1').addEventListener('click',loadCustomer);

document.getElementById('button2').addEventListener('click',loadCustomers);


function loadCustomer(e) {

    const xhr =  new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

    xhr.onload = function() {
        if(this.status === 200){
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            
            const content = `
            
                <ul>
                    <li> ID : ${customer.id} </li>
                    <li> Name : ${customer.name} </li>
                    <li> Company : ${customer.company} </li>
                    <li> Phone : ${customer.phone} </li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = content ;
        }
    }
    xhr.send();
}

function loadCustomers(e) {

    const xhr =  new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload = function() {
        if(this.status === 200){
            
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            
            let content = '' ;

            customers.forEach(function(customer) {
                
                content += `
                    <ul>
                        <li> ID : ${customer.id} </li>
                        <li> Name : ${customer.name} </li>
                        <li> Company : ${customer.company} </li>
                        <li> Phone : ${customer.phone} </li>
                    </ul>
             `;
            });
            
            document.getElementById('customers').innerHTML = content ;
        }
    }
    xhr.send();
}