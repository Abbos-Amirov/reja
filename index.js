console.log("Web servenni boshlash");
const express = require("express")
const app = express();
const http = require("http")
const fs = require('fs')

let user;
fs.readFile("database/user.json", "utf8", (err,data) => {
    if(err) {
        console.log("ERROR",err)
    } else{
        user =JSON.parse(data)
    }
});

//1 Kirish codi

app.use(express.static("public"));// public popkasini expressga tanitib beradi yani shundan foydalansang bo'ladi deb
app.use(express.json());// json malumotlarini o'qish uchun 
app.use(express.urlencoded({extended: true}));// bu HTML dan kelayotgan kodlarni to'g'ri o'qib beradi

// 2 Session code

// 3 views kodlar
app.set("views",'views');// bu yeda birinchi viewsni yozish shart ikkinchisini o'rniga boshqa istalgan narsa yozish mumkun
app.set("view engine", "ejs");

// 4 Routing code
                        //request so'rov foydalanuvchidan so;rov keladi | response bu serverdan javob qaytardi
app.post("/create-item",(req,res)=>{// post- bu HTTP methodi bo'lib u orqli foydalanuvchi serverga malumot yuboradi odatda from orqali bo'ladi
 console.log(req.body);// bu from orqli kelgan malumot
 res.json({test:"success"});
})

app.get('/author', (req,res) => {
    res.render("author",{user:user});
});


app.get("/", function (req,res){
    res.render("harid");// render bu ejs filni HTMLga aylantirib bruzarga yuboradi
});
// app.get("/hello", function (req,res){
//     res.end("<h1>Siz ssovg'lar bo'limida siz</h1>");


// });
// app.get("/gift", function (req,res){

//     res.render("project");
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen (PORT, function(){
    console.log( `The server is running successfully on port: ${PORT}`);
});