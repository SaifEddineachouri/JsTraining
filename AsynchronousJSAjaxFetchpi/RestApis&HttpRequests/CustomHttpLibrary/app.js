const http = new easyHttp();

// // Get Posts 
// http.get('https://jsonplaceholder.typicode.com/posts',

// function(err,Posts) {
//     if(err){
//         console.log(err); 
//     }else{
//         console.log(Posts); 
//     }
       
// });

// // Get Single Post 
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err,post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


// Create Data 
const data = {
    title : 'custom post',
    body : 'This is a Custom post'
};

// // Create Post

// http.post('https://jsonplaceholder.typicode.com/posts',data,
// function (err,post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });


// Put Post
http.put('https://jsonplaceholder.typicode.com/posts/1',data,

function(err,post) {

    if(err){
        console.log(err);

    }else{
        console.log(post);
    }
});

// Delete Post 

http.delete('https://jsonplaceholder.typicode.com/posts/1',

function(err,posts) {
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
});