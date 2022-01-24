// // src/App.js

// // import Title from "./components/Title";


// function App() {
//   return (
//     <div className="App">
//         <main>
//           <Title />
//         </main>

//       <header className="App-header">
//         <p>I hate coding</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Title from "./components/Title";
import Pokemon from "./components/Pokemon"

// function App() {
//   return (
//     <div className="App">
//       <main>
//         <Title content="Pokemons are shit"/>
//         <Pokemon />
//       </main> 
//     </div>
//   );
// }

// export default App;

function App() {
  return (
<div className="App">
    <main>
      <Title content="Pokemons are shit"/>
      <Pokemon
        name= "Charizard"
        weight= {90}
        awesome= {true}
        terrifying= {false}
        abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />

        <Pokemon
        name= "Bulbasaur"
        weight= {6.9}
        awesome= {true}
        terrifying= {false}
        abilities= {["Overgrow", "Chlorophyll"]}
        />

        <Pokemon
        name= "Mewtwo"
        weight= {122}
        awesome= {true}
        terrifying= {true}
        abilities= {["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
        />

        <Pokemon
        name= "Mewtwo"
        weight= {65}
        awesome= {false}
        terrifying= {true}
        abilities= {["Intimidate", "Unnerve"]}
        />
    </main>
</div>
);
}

export default App;
