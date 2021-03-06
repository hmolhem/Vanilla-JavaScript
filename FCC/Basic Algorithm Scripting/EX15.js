// Mutations
function mutation(arr) {
    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    let newArr = []
    for(let ch of b){
        a.includes(ch) ? newArr.push(ch): undefined;
    }
    return newArr.join('') === b;
  }
  
  console.log(mutation(["voodoo", "no"]));


  // Method 1 :Procedural
//   function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }


// Method 2 : Declarative
// function mutation(arr) {
//     return arr[1]
//       .toLowerCase()
//       .split("")
//       .every(function(letter) {
//         return arr[0].toLowerCase().indexOf(letter) !== -1;
//       });
//   }

// Method 3: Recursive
// function mutation([ target, test ], i = 0) {
//     target = target.toLowerCase();
//     test = test.toLowerCase();
//     return i >= test.length
//       ? true
//       : !target.includes(test[i])
//         ? false
//         : mutation([ target, test ], i + 1);
//   }