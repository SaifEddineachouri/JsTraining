const http = new easyHttp();

// // Get data
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

// // Get Single Data
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err,response) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

// Create Data 
const data = {
    title : 'custom post',
    body : 'This is a Custom post'
};

// // Create Post
//  http.post(data,'https://jsonplaceholder.typicode.com/posts',
//  function(err,post) {
//      if(err){
//          console.log(err);
//      }else{
//          console.log('Added Successfully' +post);
//      }
// });

// // Put Post
// http.put(data,'https://jsonplaceholder.typicode.com/posts/1',function(err,post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Updated Successfully'+post);
//     }
// })

// Delete Post 
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,response) {
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
})