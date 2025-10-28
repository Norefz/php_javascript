// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//        .then(response => {
//             if (!response.ok) {
//               throw new Error("coulnt fetch resource");
//             }
//         return response.json()
//        } )
//        .then(data => console.log(data.name))
//       .catch(error => console.error(error));
 
async function FetchData() {
    try {
      const pokemonName = document.getElementById("pokemonname").value.toLowerCase();
      const clearValue = document.getElementById("pokemonname");
      const errorMsg= document.getElementById("error");
      // clear output after search
    clearValue.value = "";
    // errMsg.innerHTML="Loading..."
       // errMsg.innerHTML = "";

     //the API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
         // actually coulnt not fetch data but i made  like this because lazy haha
         throw new Error("Pokemon Not Found");
      }
      let data = await response.json();
      // console.log(data)
      // console.log(data.sprites);
    // API DATA
      let name = await data.name;
      let id = await data.id;
      const img = await data.sprites.front_default;
      const height = data.height;
      document.getElementById("name").innerHTML ="Name:"+name;
      document.getElementById("height").innerHTML ="Weight:"+height;
      document.getElementById("pokemonimg").src = img;
    // remove when immage appear
      document.getElementById("name").classList.remove("hidden");
      document.getElementById("height").classList.remove("hidden");
      document.getElementById("pokemonimg").classList.remove("hidden");
      // const imgElement=  document.getElementById("pokemonimg");
      // imgElement.src= img;
      // imgElement.style.display = "block";
    errorMsg.innerHTML = "";
    } catch (error) {
       console.error(error);
       // errMsg = error;
      const errorMsg = document.getElementById("error");
    errorMsg.innerHTML = error.message;
     // remove display when errro occured
      document.getElementById("name").classList.add("hidden");
      document.getElementById("height").classList.add("hidden");
      document.getElementById("pokemonimg").classList.add("hidden");
    }
}
async function Weather(){
  const lat= 7;
  const lon= 8;
  const  city =  "Salatiga";
  const myApi = "0400a1695cd6cd7c97eb1b034bf01012"
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}`);
  const data = await response.json();
  console.log(data);
  const weather = document.getElementById("weather");
  weather = data;
  
}
Weather();
//Key Element 
 const input = document.getElementById("pokemonname");
//add listener so when key is pressed it call FetchData function
input.addEventListener("keypress",function(event){
if (event.key == "Enter") {
 FetchData();
 event.preventDefault();
}
});

