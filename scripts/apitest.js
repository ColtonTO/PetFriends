//      curl
//      -H ; "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSNkhIcFNqZXFZcUJiQThXZVMwQnNnVXJ1ZUJTcmNUU1NFUjJ1VklYUjdacTgxaEFXMCIsImp0aSI6ImE3NDE4NTRkOGI1MDAzMWM2YzY0M2UzZTRlODE3MGQ5MTBiMmFhYTExYWM5YzdlZGIwNWJiOWQ5YmY0NzNkNmYwNTk1ZWU0Mzk4OGQxZTkzIiwiaWF0IjoxNjcxNTEwNjMwLCJuYmYiOjE2NzE1MTA2MzAsImV4cCI6MTY3MTUxNDIzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Q4v60itBpvMSw_7_iXajY7cXJl6x-4JaZqA8SWNThAnnICM8CaAIKri-3s0fa6iiJXZ8CfYd81S7diDmWvxkvIxO8HnTgKA_dhU36FIIHZsVrkdmL9xG9vPYzwaQmN01ibeObVctmZsvZUwhcSZ7oJZfeENCx0pY3EwsAJw-XRCQGYcTZNVnTBfLLGWIDqrnFIyeQH8Ltr8QU4tGgMppLx3r9XGsQNMloFMhSIptba6PuvLKMPpG72V9daHxlSHL3aHWQRBeq-vOGQmToBHWTLnYwgohUcbXCzljvykIOy7TL_272BwEjSNW4i71_72CpjJJc_38CMBkJa1ZGBMbNA"

//var petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: "tYjMHZupQz0KErvq5ks2tmbgVeeNjmcIcWNxdXWDZB214NzP4I", secret: "DjUBiCURqrNwtRv9GZcuT8CUb6tHWMua1EIlqthR"});
let animalCard = document.querySelector('#animalCard')

async function showAnimals(animalType, searchBreed, postalCode) {
    let page = 1; 
    //do {
        apiResult = await client.animal.search({
            type: animalType,
            breed: searchBreed,
            location: postalCode,
            page: 1, 
            limit: 20,
        });
        let dogIdx = (page = 1) * 100;
        apiResult.data.animals.forEach(function(animal) {
            let results = `  ${++dogIdx}: ${animal.name} url: ${animal.url} breed: ${animal.breeds.primary} postcode: ${animal.contact.address} photo: ${animal.photos[0]} description: ${animal.description}`;
            //animalCard.textContent = results;
            console.log(results)
            displayAnimal(animal)
            //console.log(` == ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
        });
        console.log(apiResult)
        console.log(page)
        page++;
    //} while(apiResult.data.pagination && apiResult.data.pagination.total_pages <= page);
}

(async function() {
    await showAnimals("Dog", "Husky", "80204");
})();

function displayAnimal(animal){
    const div = document.createElement('div')
    div.classList.add('tile', "is-child", "box",);
    div.innerHTML = "<strong>" + animal.name + "</strong>" + "</br> " + animal.description + ".</br> " + "<a href='"+animal.url+"'>Link to their WebPage</a>" + "</br> " + animal.breeds.primary + ".</br> " + animal.contact.address.city + ", " + animal.contact.address.country + " " + animal.contact.address.postcode;
    document.querySelector("#animal-container").appendChild(div)
    let newA = document.createElement("a");
    newA.setAttribute("href", animal.url)
    div.appendChild(newA);
    if (animal.description == null) {
        return div.innerHTML = div.innerHTML = "<strong>" + animal.name + "</strong>" + ".</br> " + "<a href='"+animal.url+"'>Link to their WebPage</a>" + "</br> " + animal.breeds.primary + ".</br> " + animal.contact.address.city + ", " + animal.contact.address.country + " " + animal.contact.address.postcode;
    }
    let animalImg = document.createElement("img");
    animalImg.classList.add("image", "is-128x128");
    if (animal.photos[0]) {
    animalImg.setAttribute("src", animal.photos[0].full)
    div.appendChild(animalImg)
    }

}

  client.animalData.types()
  .then(resp => {
    console.log(resp);
  });

  client.animalData.breeds('dog')
  .then(resp => {
    console.log(resp)
  });







