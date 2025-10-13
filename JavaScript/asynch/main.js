
// Async/Await = Async = makes a function return a promise

//                            Await = makes an async function wait for a promise



// Allows you write asynchronous code in a synchronous manner

// Async doesn't have resolve or reject set up as parameters

// Everything after Await is placed in an event queue

function First() {
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
    console.log("I")
  }, 500);
  });
}
function Second(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("Love")
  }, 800);
  });
}

function Third(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("You")
  }, 1000);
  });
}
function Four(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("For")
  }, 1300);
  });
}
function Five(){
  return new Promise ((resolve,reject)=>{
  setTimeout(() => {
     console.log("1000 year")
  }, 1700);
  });
}
    First();
    Second();
    Third();
    Four();
    Five();
