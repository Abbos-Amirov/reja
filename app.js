
  // return app;

  const express = require('express');
  const app = express();
  const fs = require('fs');
  const client = require('./server');
  const mongodb = require("mongodb")
  
  let user;
  fs.readFile("database/user.json", "utf-8", (err, data) => {
      if(err){
          console.log('ERROR:', err);
      } else {
          user = JSON.parse(data);
      }
  });
  
  // MongoDB connect
  const db = require('./server');
  
  // 1: Kirish code
  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  
  // 2: Session code
  
  // 3: Views code
  app.set('views', 'views');
  app.set('view engine', 'ejs');
  
  // 4: Routing code
  app.post('/create-item', (req, res) => {
      console.log(req.body);
      const new_reja = req.body.reja;
     
      db.collection('plans').insertOne({reja: new_reja}, (err, data) =>{
        console.log(data.ops) 
        res.json(data.ops[0]) 
      });
  });

// delete 
  app.post("/delete-item", (req, res) =>{
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)},
         function(err,data) {
            res.json({state: "tog'ri"});
        }
    )
  })

// edit - opretione
  app.post("/edit-item",(req, res) => {
    const data = req.body;
   console.log(data)  
   db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input}},
    function(err,data){
       
    }
   
   )  
   res.json ({state: "backenda ga eson omon yetib keldi"})
   
   })


   // deleter-all

   app.post("/delete-all", (req,res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany( function() {
            res.json({state:"Hammasini o'chirmoqchimisiz"})

        })
    }
   })
 
  
  // render  resume
  app.get('/author', function (req, res) {
      res.render('author', {user: user});
  });
  
  // home page
  app.get('/', function(req, res){
      db.collection('plans')
          .find()
          .toArray((err, data) => {
              if(err){
                  console.log(err);
                  res.end("something wnet wrong");
              } else {
                  console.log(data);
                  res.render('reja', {items: data});
              }
      });
  });
  
  module.exports = app;



// app.post("/create-item", (req, res) => {

//   db.collection("plans").insertOne(
//     {text: req.body.item}, () => {
//       if(err){
//         return
//         res.send("Xatolik")
//     } 
//     else{
//        res.redirect("/")
//     }
//     } );

//  console.log(req.body);
//    res.end("keldi")
   
//});

//  app.get("/", function (req, res) {
//   db.collection("plans")
//      .find()
//      .toArray((err, data) => {
//        if (err) {
//         console.log(err);
//         res.end("something went wrong");
//      } else {
//         console.log(data);
//          res.render("reja",{plans:data});
//        }
//      });
//  });

//  module.exports = app;













//shu yer


// const express = require("express")
// const app = express();
// // const http = require("http")
//  const fs = require('fs')

// let user;
// // fs.readFile("database/user.json", "utf8", (err,data) => {
// //     if(err) {
// //         console.log("ERROR",err)
// //     } else{
// //         user =JSON.parse(data)
// //     }
// // });

// //MongsDB chaq


// const db = require("./server");

// //1 Kirish codi

// app.use(express.static("public"));// public popkasini expressga tanitib beradi yani shundan foydalansang bo'ladi deb
// app.use(express.json());// json malumotlarini o'qish uchun 
// app.use(express.urlencoded({extended: true}));// bu HTML dan kelayotgan kodlarni to'g'ri o'qib beradi

// // 2 Session code

// // 3 views kodlar
// app.set("views",'views');// bu yeda birinchi viewsni yozish shart ikkinchisini o'rniga boshqa istalgan narsa yozish mumkun
// app.set("view engine", "ejs");

// // 4 Routing code
//                         //request so'rov foydalanuvchidan so;rov keladi | response bu serverdan javob qaytardi
// app.post("/create-item",(req,res)=>{// post- bu HTTP methodi bo'lib u orqli foydalanuvchi serverga malumot yuboradi odatda from orqali bo'ladi
//  console.log(req.body);// bu from orqli kelgan malumot
//  res.json({test:"success"});
// })

// app.get('/author', (req,res) => {
//     res.render("author",{user:user});
// });


// app.get("/", function (req,res){
//     db.collection("plans")
//     .find()
//     .toArray( (err,data) => {
//         if(err){
//             console.log(err);
//             res.end("somethi went wrong");
//         } else{
//             console.log(data);
//             res.render("reja");
//         }
//     })
//    // render bu ejs filni HTMLga aylantirib bruzarga yuboradi
// });

// // app.get("/hello", function (req,res){
// //     res.end("<h1>Siz ssovg'lar bo'limida siz</h1>");


// // });
// // app.get("/gift", function (req,res){

// //     res.render("project");
// // });

// module.exports = app;