function human() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     const person =true;
      if (person) {
        resolve"going to walk";
      } else {
        reject"going to sleep";
      }
    }, 300);
  })

}
function pet() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      const pet =true;
      if (pet) {
        resolve"going to eat";
      } else {
        reject"going to sleep";
      }
    }, 500);
  })
}
function car() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const engine =true;
      if (engine) {
        resolve"engine running";
      } else {
        reject"engine is not running";
      }
    }, 700);
  })
}
human();
