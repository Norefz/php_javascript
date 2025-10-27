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
    }
}
//Key Element 
 const input = document.getElementById("pokemonname");
//add listener so when key is pressed it call FetchData function
input.addEventListener("keypress",function(event){
if (event.key == "Enter") {
 FetchData();
 event.preventDefault();
}
});


