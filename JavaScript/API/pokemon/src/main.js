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
async function Weather() {
  const myApi = "0400a1695cd6cd7c97eb1b034bf01012";

  // Check if geolocation is supported
  if (!navigator.geolocation) {
    document.getElementById("weather").innerHTML = "Geolocation not supported by your browser.";
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApi}&units=metric`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();

      const city = data.name;
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;

      // Update the HTML content
      document.getElementById("weather").innerHTML = `
        <div class="flex flex-col items-center text-center">
          <p class="text-lg font-semibold">${city}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" class="w-16 h-16">
          <p class="text-2xl font-bold">${temp}°C</p>
          <p class="capitalize text-sm">${desc}</p>
        </div>
      `;
    } catch (error) {
      document.getElementById("weather").innerHTML = `<p class="text-red-400">${error.message}</p>`;
    }
  }, () => {
    document.getElementById("weather").innerHTML = "Location access denied.";
  });
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

