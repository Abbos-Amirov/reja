//===========TASK B ===========

function sanaRaqam(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== " ") {
        count++;
      }
    }
    return count;
  }
  natija = sanaRaqam("49853d85g7a5gd")
  console.log("natija:",natija); // Natija: 7

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


