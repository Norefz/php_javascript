
// Async/Await = Async = makes a function return a promise

//                            Await = makes an async function wait for a promise



// Allows you write asynchronous code in a synchronous manner

// Async doesn't have resolve or reject set up as parameters

// Everything after Await is placed in an event queue

// function First() {
//   return new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("I")
//     document.getElementById("i").innerHTML = "I";
//   }, 500);
//   });
// }
// function Second(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//      console.log("Love")
//        
//     document.getElementById("love").innerHTML = "Love";
//   }, 800);
//   });
// }
//
// function Third(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//      console.log("You")
//        
//     document.getElementById("you").innerHTML = "You";
//   }, 1000);
//   });
// }
// function Four(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//      console.log("For")
//        
//     document.getElementById("for").innerHTML = "For";
//   }, 1300);
//   });
// }
// function Five(){
//   return new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//      console.log("1000 year")
//     document.getElementById("thousand").innerHTML = "1000 year";
//   }, 1700);
//   });
// }
function First() {
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
    console.log("I")
    document.getElementById("i").innerHTML = "I";
  }, 1000);
  });
}
function Second(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("Love")
       
    document.getElementById("i").innerHTML = "Love";
  }, 2000);
  });
}

function Third(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("You")
       
    document.getElementById("i").innerHTML = "You";
  }, 3000);
  });
}
function Four(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("For")
       
    document.getElementById("i").innerHTML = "For";
  }, 4000);
  });
}
function Five(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("1000 year")
    document.getElementById("i").innerHTML = "1000 year";
  }, 5000);
  });
}
function Final(){
  return new Promise((resolve,reject)=> {
    setTimeout(() => {
   document.getElementById("i").innerHTML = "I Love You For 1000 year:)"
    }, 7000);
  } );
}

    First();
    Second();
    Third();
    Four();
    Five();
    Final();
