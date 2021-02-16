import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function clicked(e){
    if(value == "") {
      alert("Type something");
      return;
    }
    setList(current=>current.concat(value + ", set at " + Date().toLocaleString()))
  }

  function typed(e){
    setValue(e.target.value);
  }

  function removed(e){
    console.log(list)
    //setList(current=>current.filter(items=> console.log(items)))
  }

  return (
    <div className="App">
      <h1>To-do list</h1>
      <p>Write on the search bar, click to submit, and click on the list item to remove</p>
      <input
        type="text"
        placeholder="Type here"
        onChange={typed}>
      </input>
      <button onClick={clicked}>Add</button>
      <ul onClick={removed}>
        {list.map(element=>{return <li>{element}</li>})}
      </ul>
    </div>
  );
}


export default App;
/*{list.map(element=>{return <li>{element}</li>})}
*/
