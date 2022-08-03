// unreachable code: comment: default, true:ignore, false:error
// function fn(num:number) {
//   if (num > 5) {
//     return true;
//   } else {
//     return false;
//   }
//   return true;
// }
// console.log(fn(5212));
// allowUnusedLabels  default:suggestion true:ignore false:error
// function fn(age: number) {
//     if (age > 18) {
//         verified: true;
//   }
// }
// console.log(fn(5212));
// Enable "noUnusedLocals" when local variables declare but not used. */
// function print() {
//     let name="kamal";
// }
// print();
// Enable "noUnusedParameters" when parameters pass but not used. */
// function print(name:string) {
//     return true;
// }
// print("kamal");
// Enable "noImplicitReturns" when clearly return. */
// function print(data:string) {
//   if (data === "blue") {
//     return "beats";
//   } else {
//     ("bose");
//   }
// }
// print("blues")
// Enable "noFallthroughCasesInSwitch show error when forget to add break"
// function print(name:string) {
//   switch (name) {
//     case "john":
//       console.log("john");
//     default:
//       break;
//   }
// }
// print("john")
// exactOptionalPropertyTypes:true  can't assign to undefined when true
// interface theme {
//   color?: "dark" | "light";
// };
// function addTheme(themeColor: theme) {
//   console.log("color is", themeColor);
// }
// addTheme({color:"dark"});
// addTheme({color:"light"});
// addTheme({color:undefined});
// noImplicitAny when true must provide type of params
// function fn(s) {
//     // No error?
//     console.log(s.subtr(3));
//   }
//   fn(42);
// noImplicitOverride 
// class Album {
//     setup() {}
//   }
//   class MLAlbum extends Album {
//     override setup() {}
//   }
//   class SharedAlbum extends Album {
//     setup() {}
//     // This member must have an 'override' modifier because it overrides a member in the base class 'Album'.
//   }
// noImplicitThis when true gives error 
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//       this.width = width;
//       this.height = height;
//     }
//     getAreaFunction() {
//       return function () {
//         return this.width * this.height;
//         //   'this' implicitly has type 'any' because it does not have a type annotation.
//         //   'this' implicitly has type 'any' because it does not have a type annotation.
//       };
//     }
//   }
// noPropertyAccessFromIndexSignature 
// checkjs 
// work when allowJs. when js file has error and imported in ts file 
// filename:constants.js
// module.exports.pi = parseFloat(3.124);  // gives an error because parseFloat accept string.
// filename: index.ts
// import { pi } from "./constants";
// console.log(pi);
