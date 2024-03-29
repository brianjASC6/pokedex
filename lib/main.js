let url = "https://pokeapi.co/api/v2/pokemon/chimchar"
function getTypes(PokemonJSON){
    let types = [];
    for(let type of PokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}
function getMoves(PokemonJSON){
    let moves = [];
    for( let move of PokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves
}
function getAbilities(PokemonJSON){
    let abilities = []
    for(let ability of PokemonJSON.abilities){
        abilities.push(ability.ability.name)
    }
    return abilities
}



function createPokemonElement(pokemon){
//h1 tag for name
let h1 = document.createElement("h1");
h1.innerText = pokemon.name;
//h2 tag for number
let h2 = document.createElement("h2");
h2.innerText = pokemon.number;

let img = document.createElement("img");
let fluidContainer = document.getElementsByClassName("container-fluid")[0]
img.src = pokemon.image;
//p tag for types
let p = document.createElement("p");
for(let type of pokemon.types){
    p.innerText +=`${type}`
}
//ul tag for moves
let moveUL = document.createElement("ul");
for(let move of pokemon.moves){
    moveUL.innerHTML += `<li>${move}</li>`;
}
//ul tag for abilities
let abilityUL = document.createElement("ul");
for(let ability of pokemon.abilities){
    abilityUL.innerHTML += `<li>${ability}</li>`;
}
//div container for our pokemon element
let div = document.createElement("div");
div.append(h1, h2,img, p, moveUL, abilityUL);
fluidContainer.appendChild(div);
}

fetch(url)
.then((response)=> response.json())
.then(function(data){
    //console.log(data);
    let name = data.name
    let number = data.id
    let types = getTypes(data)
    let moves = getMoves(data);
    let abilities = getAbilities(data)
    let image = data.sprites.front_default;
    let chimchar = new Pokemon(name,number,types,moves,abilities, image);
    console.log(chimchar)
    createPokemonElement(chimchar);
})
.catch(function(error){
    console.log(error)
})