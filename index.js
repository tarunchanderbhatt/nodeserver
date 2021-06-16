const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("this is my first server let start");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is start....")
})


// Ren BhxBrowser
// localhost:8000
// 127.0.0.1:8000