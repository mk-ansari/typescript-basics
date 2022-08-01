// basic class example
// class Users {
//     name="";
//     age="";

//     addUser(user:string){
//         return `${user} is added`
//     }
// }

// let User1 = new Users;

// const result = User1.addUser("john");
// console.log(result);

// private & public access modifier
// class Users {
//   private name = "";

//   setName(name: string) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//     console.log(this.getNameLength()); //call private function from public function.
//   }
//   private getNameLength() {
//     return this.name.length;
//   }
// }

// const u1 = new Users();
// u1.setName("john");
// // u1.name = "wick";  //private variable can't access
// u1.getName();
// // console.log(u1.getNameLength());   //private function can't access

// Constructor

// class Users {
//     name="";
//     age;

//     constructor(name:string, age:number){
//         // console.log("constructor called.");
//         this.name= name;
//         this.age= age;
//     }
//     displayName(){
//         console.log(this.name, this.age);
//     }
// }
// const u1 = new Users("john", 23);
// u1.displayName();

// constructor shorthand
// class Users {

//     constructor(public name:string, public age:number){
//         // console.log("constructor called.");
//     }
//     displayName(){
//         console.log(this.name, this.age);
//     }
// }
// const u1 = new Users("john", 23);
// u1.displayName();



// readonly & private properties & functions

// class Users {
//     readonly name = "kamal";
// //   private name = "kamal";
//   username = this.name
// }

// const u1 = new Users();
// // u1.name = "john"
// console.log(u1.name);
// console.log(u1.username); 


// Inheritance

class CreateAccount {
  makeEmail(user:string){
    return `${user}@gmail.com`
  }
}

class Users extends CreateAccount{
    addUser(user:string){
        return `${user} added as user`
    }
}

const u1 = new Users();

console.log(u1.addUser("kamal"));
console.log(u1.makeEmail("kamal"));

