// const res = ["Eszter", "Violeta", "Rein", "Danny"].map((name) => {
//     return name.length;
//   });



// const all_pokemon = [
//     { name: "Charizard" },
//     { name: "Mewtwo" },
//     { name: "Mega beedrill" },
//   ];
  
//   const res = all_pokemon.map((pokemon) => {
//     return pokemon.name;
//   });

//   console.log(all_pokemon)
//   console.log(res)


  const all_pokemon = [
    { name: "Charizard", weight: 90 },
    { name: "Bulbasaur", weight: 6.9 },
    { name: "Mewtwo", weight: 122 },
    { name: "Mega beedrill", weight: 65 },
  ];

  console.log(all_pokemon.map(pokemon => pokemon.weight));
  
  console.log(all_pokemon.map(pokemon => `${pokemon.name}: ${pokemon.weight}`))
//   console.log(all_pokemon.map())

//   const res = all_pokemon.map((pokemon) => {
//       return pokemon.weight;
//   })