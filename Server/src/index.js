const http = require('http');
const character = require("./utils/data");
const Port = 3001;

http
.createServer((req, res) =>{
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url === "/rickandmorty/character"){

    }

}).listen(Port, "localhost")