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

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some super nice Title"/>
        <Pokemon />
        
      </main>

      <header className="App-header">
        <p>I hate coding</p>
      </header>

      
    </div>
  );
}

export default App;




