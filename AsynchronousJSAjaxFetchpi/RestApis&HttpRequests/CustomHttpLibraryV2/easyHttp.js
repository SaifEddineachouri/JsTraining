class EasyHttp {

    // Make an Http Get Request

    get(url){
        return new Promise((resolve,reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
        });
        
    }

    // Make an Http Post Request

    post(url,user){
        return new Promise((resolve,reject) =>{
            fetch(url , {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make an Http PUT Request

    put(url,user){
        return new Promise((resolve,reject) =>{
            fetch(url, {
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make an  Http Delete Request

    delete(url){
        return new Promise((resolve,reject) =>{
            fetch(url ,{
                method : 'DELETE' ,
                headers : {
                    'Content-type' : 'application/json'
                }
            })
            .then(res =>res.json())
            .then(() => resolve('User Deleted'))
            .catch(err =>reject(err))
        });
    }

}