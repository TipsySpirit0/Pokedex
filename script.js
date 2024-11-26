async function fetchData(){
    try{

        const pokeName = document.getElementById("pokeName").value.toLowerCase();
        const name = document.getElementById("name");
        const hp = document.getElementById("hp");
        const attack = document.getElementById("attack");
        const defense = document.getElementById("defense");
        const spAttack = document.getElementById("special-attack");
        const spDefense = document.getElementById("special-defense");
        const speed = document.getElementById("speed");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        
        if(!response.ok){
            throw new Error('Made a mistake somewhere')
        }

        const data = await response.json();
        // console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;

        name.textContent = data.forms[0].name.toUpperCase();

        // Set stats
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        spAttack.textContent = data.stats[3].base_stat;
        spDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        // console.log(pokemonSprite);
        
    }
    catch(error){
        console.error(error);
    }
}


const input = document.getElementById("input");
input.addEventListener("submit", e=>{
    e.preventDefault();
    fetchData();
})

// const pokeName = document.getElementById("pokeName");
// const button = document.getElementById("button");

// fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
// .then(response => {
//     if(!response.ok){
//         throw new Error('Made a mistake somewhere')
//     }
//     return response.json()
// }).then(pokeData => {
//     console.log('Pokemon Data:', pokeData)
// }).catch(error => {
//     console.error(error)
// })