

const http = require("http");
const mongodb = require("mongodb");

const connectionString = "mongodb+srv://Oscar:A3mzJqupDes8QLkx@cluster0.dbpygr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;

mongodb.MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err, client) => {
  if (err) {
    console.log("MongoDB ulanishda xato:", err);
  } else {
    db = client.db("reja"); // Bazani tanladik
    console.log("MongoDB connection succeed");

    const app = require("./app")(db); // App'ga db ni uzatamiz
    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log( `Server ishlayapti: http://localhost:${PORT}`);
    });
  }
});







// bu vido kodi







// tugadi


// const http = require("http");
// const mongodb = require("mongodb")



// let db;
// const connectionString ="mongodb+srv://Oscar:A3mzJqupDes8QLkx@cluster0.dbpygr2.mongodb.net/reja"

// mongodb.connect(connectionString, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }, (err, client) =>{
// if(err) console.log("ERROR: on connection MongoDb");
//  else{

//     // const db = client.db("reja")

//    module.exports = client;
//     console.log("MongoDB connection succeed")
//     const app = require("./index");
//     const server = http.createServer(app);
// let PORT = 3000;
// server.listen (PORT, function(){
//     console.log( `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });
//  }
// });

