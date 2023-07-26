import { Player } from "./player.js"


function App() {
  let p = new Player("lee");

  return(
    <div class="APP">
      <h1>{p.name}</h1><br/>
      <p>{p.a}</p><br/> : {p.getName()}
    </div>
  );  
}

export default App;