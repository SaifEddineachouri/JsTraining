// Using ES5 Prototypes
function easyHttp() {
    this.http = new XMLHttpRequest();
}

// Make an Http Get Request
easyHttp.prototype.get = function(url,callback) {
    
    this.http.open('GET',url,true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback('Error'+ self.http.status);
        }
    }
    this.http.send();
}
// Make an Http Post Request
easyHttp.prototype.post = function(post,url,callback){
    
    this.http.open('POST',url,true);
    this.http.setRequestHeader('content-type','application/json');

    let self= this ;

    this.http.onload= function() {
            callback(null,self.http.responseText);  
    }
    this.http.send(JSON.stringify(post));
}
// Make an Http Put Request
easyHttp.prototype.put = function(post,url,callback) {
    
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('content-type','application/json');

    let self= this ;
    this.http.onload = function() {
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(post));
}
// Make an Http Delete Request
easyHttp.prototype.delete =function(url,callback) {
    this.http.open('DELETE',url,true);

    let self = this ;
    this.http.onload = function() {
        if(self.http.status === 200 ){
            callback(null,'Post Deleted');
        }else{
            callback('Error',self.http.status);
        }
    }
    this.http.send();
}
