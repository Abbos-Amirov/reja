console.log("Web servenni boshlash");
const express = require("express")
const app = express();
const http = require("http")

//1 Kirish codi

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));// bu HTML dan kelayotgan kodlarni to'g'ri o'qib beradi

// 2 Session code

// 3 views kodlar
app.set("views:",'views');
app.set("view engine","ejs");

// 4 Routing code
app.get("/", function (req,res){
    res.end("<h1>Hello World</h1>");

});

app.get("/", function (req,res){
    res.end("<h1>Siz ssovg'lar bo'limida siz</h1>");


});

const server = http.createServer(app);
let PORT = 3000;
server.listen (PORT, function(){
    console.log( `The server is running successfully on port: ${PORT}`);
});