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
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      if (!response.ok) {
         throw new Error("could not Fetch the resource");
      }
      let data = await response.json();
      console.log(data.sprites);
      let name = await data.name;
      let img = await  data.sprites;
      document.getElementById("name").innerHTML = name;
      document.getElementById("img").innerHTML = img;
    } catch (error) {
       console.error(error);
    }
}
FetchData();
