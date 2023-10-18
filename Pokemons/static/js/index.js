var contador = 0;

function buscar(){
    var entrada = document.getElementById("entrada").value.toLowerCase();

    if(entrada.length < 1){
        entrada = contador;
    }

    var url = "https://pokeapi.co/api/v2/pokemon/" + entrada + "";

    fetch(url)
    .then(response => response.json())
    .then( data => {
        var tela = document.getElementById("tela");
        tela.innerHTML = 
        '<h2>'+ data.name +'</h2>'
        
        // +'<img class="pokemonBack" src="'+ data.sprites.back_default +'">'
        // +'<img class="pokemonFront" src="'+ data.sprites.front_default +'">'

        +'<img class="pokemonBack" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif">'
        +'<img class="pokemonFront" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif">'

        +'<p> Id: '+ data.id +'</p>'
        +'<p> Tipo: '+ data.types.map(type => type.type.name) +'</p>'
        +'<p> Habilidades: '+ data.abilities.map(ability => ability.ability.name) +'</p>'

        contador = data.id;
        document.getElementById("entrada").value = "";

    }).catch(error => {
        var tela = document.getElementById("tela");
        tela.innerHTML = '<p class="errorMessage"> Pokémon não encontrado! </p>'
    });
};

function proximo(){
    contador += 1;
    buscar();
};

function anterior(){
    contador -= 1;
    buscar();
};