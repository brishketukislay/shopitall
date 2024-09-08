// //node file without express
// import http from 'http';
// const PORT = process.env.PORT;

// const server = http.createServer((req,res) =>{
//     try{
//         if(req.method === 'GET'){
//             if(req.url === '/'){
//                 res.writeHead(200,{'Content-Type': 'text/html'});
//                 res.end('<h1>homepage</h1>');
//             }
//             else if(req.url === '/about'){
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end('<h1>About</h1>');
//             }
//         }
//         else{
//             throw new Error('Method not allowed');
//         }
//     }
//     catch(error){
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('page not found');
//     }
// })

// server.listen(8000, ()=>{
//     console.log(`Server running on port ${PORT}`)
// })