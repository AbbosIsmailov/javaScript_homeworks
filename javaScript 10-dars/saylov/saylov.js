// var voters = [
//       { name: 'Bob', age: 30, voted: true },
//       { name: 'Jake', age: 32, voted: true },
//       { name: 'Kate', age: 25, voted: false },
//       { name: 'Sam', age: 20, voted: false },
//       { name: 'Phil', age: 21, voted: true },
//       { name: 'Ed', age: 55, voted: true },
//       { name: 'Tami', age: 54, voted: true },
//       { name: 'Mary', age: 31, voted: false },
//       { name: 'Becky', age: 43, voted: false },
//       { name: 'Joey', age: 41, voted: true },
//       { name: 'Jeff', age: 30, voted: true },
//       { name: 'Zack', age: 19, voted: false }
// ];

// function voterResults(arr) {
//       let sum = 0;
//       let ikki = 0;
//       let uch = 0;
//       for (let i = 0; i < arr.length; i++){
//            if (arr[i].voted === true){
//                   if (arr[i].age <= 25) {
//                         sum++;
//                   }
//                   if (arr[i].age <= 35 && arr[i].age >= 26) {
//                         ikki++;
//                   }
//                   if (arr[i].age >= 36) {
//                         uch++;
//                   }
//            }
//       }
//       console.log(` Yoshlar soni: ${sum}\n O'rta yoshlar soni:
// ${ikki}\n Katta yoshlar soni: ${uch}`);
// }

// voterResults(voters);


var voters = [
      { name: 'Bob', age: 30, voted: true },
      { name: 'Jake', age: 32, voted: true },
      { name: 'Kate', age: 25, voted: false },
      { name: 'Sam', age: 20, voted: false },
      { name: 'Phil', age: 21, voted: true },
      { name: 'Ed', age: 55, voted: true },
      { name: 'Tami', age: 54, voted: true },
      { name: 'Mary', age: 31, voted: false },
      { name: 'Becky', age: 43, voted: false },
      { name: 'Joey', age: 41, voted: true },
      { name: 'Jeff', age: 30, voted: true },
      { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
      let sum = arr.reduce((acc, cv) => {
            if (cv.age >= 18 && cv.age <= 25) {
                  acc.numYoungPeople++;
                  if (cv.voted) {
                        acc.numYoungVotes++;
                  }
            }
            if (cv.age >= 26 && cv.age <= 35) {
                  acc.numMidsPeople++;
                  if (cv.voted) {
                        acc.numMidVotesPeople++;
                  }
            }
            if (cv.age >= 36 && cv.age <= 55) {
                  acc.numOldsPeople++;
                  if (cv.voted) {
                        acc.numOldVotesPeople++;
                  }
            }
            return acc;
      },
            {
                  numYoungVotes: 0,
                  numYoungPeople: 0,
                  numMidVotesPeople: 0,
                  numMidsPeople: 0,
                  numOldVotesPeople: 0,
                  numOldsPeople: 0
            }
      )
      console.log(sum);
}

voterResults(voters);