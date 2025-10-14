function human() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     const person =true;
      if (person) {
        resolve("going to walk");
      } else {
        reject("going to sleep");
      }
    }, 300);
  })

}
function pet() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const pet =true;
      if (pet) {
        resolve("going to eat");
      } else {
        reject("going to sleep");
      }
    }, 500);
  })
}
function car() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const engine =true;
      if (engine) {
        resolve("engine is running");
      } else {
        reject("engine is run out");
      }
    }, 700);
  })
}

async function Result() {
  try {
  const humanResult = await human();
  console.log(humanResult);
  const petResult = await pet();
  console.log(petResult);
  const carResult = await car();
  console.log(carResult);
  } catch (error) {
     console.error(error);
  }
}
Result();
// with promise All
async function betterResult(){
  try  {
     const[humanResult,petResult,carResult] = await Promise.all ([
    human(),
    pet(),
  car(),
    ] );
    console.log(humanResult);
    console.log(petResult);
    console.log(carResult);
  } catch (error) {
    
  }
}
betterResult();
