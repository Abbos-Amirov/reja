

// ============= C ==========

function hariflar(a, b) {
  function natija(qiymat) {
    return qiymat
    .split('')
    .sort()
    .join('');
  }
  if (natija(a) === natija(b)) {
    return true;
  } else {
    return false;
  }
}
console.log(hariflar("abbos", "bosab"));  
console.log(hariflar("hello", "world"));  

















//===========TASK B ===========

// function sanaRaqam(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i]) && str[i] !== " ") {
//         count++;
//       }
//     }
//     return count;
//   }
//   natija = sanaRaqam("49853d85g7a5gd")
//   console.log("natija:",natija); // Natija: 7

  //========== TASK A ==========//
// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// ism = countLetter("M", "MUXAMMAD")
// console.log(ism); // Natija: 3









// Asynchrons functinlarni qollash 

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling",                 // 0–20
//   "togri boshliq tanlang va koproq xato qiling", // 20–30
//   "ozingizga ishlashingizni boshlang",    // 30–40
//   "siz kuchli bolgan narsalarni qiling",  // 40–50
//   "yoshlarga investitsiya qiling",         // 50–60
//   "endi dam oling, foydasi yoq endi",      // >60
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];// 
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // 
//     return new Promise( (resolve, reject) => {
//          setTimeout(function () {
//       resolve( list[5]);
//     }, 1000);
//   });
// }
// }
// // call va asynchrons await functinlar

// async function run() { // bu yerda await ishlaydi hamma shartlar birin ketin bajarilayapti shu bilan birga pastdagidan ancha samarali
//   let javob = await maslahatBering(65) // bu yerda bir marta javob keladi agar callback function bolsa qayta qayta kelgan bo'lardi
//   console.log(javob);
//   // javob = await maslahatBering(70)
//   // console.log(javob);
//   // javob = await maslahatBering(44)
//   // console.log(javob);
// }
// run();




// Bu call va  then/catch  dan foydalandik

// console.log("passed here 0");

// maslahatBering(30)
//   .then((data) => {
//     // boshi
//     maslahatBering(40)
//   .then((data) => {
//     console.log("javob:", data); // bu tarixda ham joylashtirsa bo'ladi lekin juda qiyin bo'lib ketadi
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// //oxiri
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");






















// Node.js Event Loop Va Callback Functionalr darsi

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling",                            // 0–20
//   "togri boshliq tanlang va koproq hato qiling",     // 20–30
//   "uzingizga ishlashingizni boshlang",               // 30–40
//   "siz kuchli bolgan narsalarni qiling",             // 40–50
//   "yoshlaringga investitsiya qiling",                // 50–60
//   "endi dam oling, foydasi yoq endi"                 // >60
// ];


// Callback functinlar
// function maslahatBering(a, callback) { 
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {

   // setIntervel(function(){
//       callback(null, list[5]);

//     },5000);
    
//   }
// }

// console.log("Passed haer 0")

// maslahatBering(65,(err,data) => {   
//   if (err) console.log("ERORR:",err);

//   else{
//     console.log("javob:",data);
//   }

// });

// console.log("passd haer 1")

// // maslahatBering(25, (err, data) => {
// //   if (err) console.log("ERROR:", err);
// //   console.log("javob:", data);
// // });


// console.log("===== EXECUTE =====");

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bololmaydi", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// // CALL
// qoldiqliBolish(55,7, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }
// });