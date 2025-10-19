fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
       .then(response => {
            if (!response.ok) {
              throw new Error("coulnt fetch resource");
            }
        return response.json()
       } )
       .then(data => console.log(data.name))
      .catch(error => console.error(error));
