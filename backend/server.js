const http=require("http");
const app=require('./app');
const port=process.env.port || 4500




const server=http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running in PORT ${port}`);
    
});