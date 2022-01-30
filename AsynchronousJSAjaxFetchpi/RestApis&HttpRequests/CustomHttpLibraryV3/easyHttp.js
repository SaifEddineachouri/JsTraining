class EasyHttp {

    // Make an Http Get Request

    async get(url){
        const response= await fetch(url);

        const resData = await response.json();

        return resData ;
        
    }

    // Make an Http Post Request

    async post(url,user){
            const  response = await fetch(url , {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            }) ;
            const resData = await(response.json());
            return resData ;
    }

    // Make an Http PUT Request

    async put(url,user){
       
            const  response = await fetch(url, {
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            }) ;

            const resData = await(response.json());
            return resData;
    }

    // Make an  Http Delete Request

    async delete(url){
        const  response = await fetch(url ,{
                method : 'DELETE' ,
                headers : {
                    'Content-type' : 'application/json'
                }
            });

        const  resData = await 'User Deleted';

        return resData ;
    }
}