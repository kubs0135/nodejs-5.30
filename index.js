const http=require("http");

http.createServer((req,res)=>
    {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          data: 'Hello World!',
        }));
      }).listen(8000);

    console.log("application is running");

    //fs read hello.txt,os =>ram herne