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
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
         throw new Error("could not Fetch the resource");
      }
      let data = await response.json();
      console.log(data.sprites);
      let name = await data.name;
      let id = await data.id;
      const img = await data.sprites.front_default;
      document.getElementById("name").innerHTML = name;
      document.getElementById("id").innerHTML = id;
      document.getElementById("pokemonimg").src = img;
       
      // const imgElement=  document.getElementById("pokemonimg");
      // imgElement.src= img;
      // imgElement.style.display = "block";
    } catch (error) {
       console.error(error);
    }
}
