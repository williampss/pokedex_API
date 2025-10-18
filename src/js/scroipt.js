let input_search = document.getElementById("input_search")
let pokemon_image = document.getElementById("pokemon_image")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_name = document.getElementById("pokemon_name")

let btn_search = document.getElementById("btn-search")
let btn_search_next = document.getElementById("btn-next")
let btn_search_prev = document.getElementById("btn-prev")

let next_prev_pokemon = 1


 function renderPokemon(pokemon){
    // nome pokemon para tornar a busca dinamica
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log()
        pokemon_name.innerText = data.name
        pokemon_number.innerText = data.id
        // quando conter uma palavra com ifen fazer esse processo, de colocar entre cochetes
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        input_search.value = ""
        next_prev_pokemon = data.id
    })
}

btn_search.addEventListener("click" , (e) => {
    e.preventDefault()
    renderPokemon(input_search.value)
    

})

btn_search_next.addEventListener("click", () => {
    next_prev_pokemon++
    renderPokemon(next_prev_pokemon)
})

btn_search_prev.addEventListener("click", () => {

    if(next_prev_pokemon >1){
    next_prev_pokemon--
    renderPokemon(next_prev_pokemon)

    }
})


