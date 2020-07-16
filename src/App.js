import React from 'react';
import './App.css';
import { Store } from './data/Store';
import { TEST_STR, TEST_ARRAY, TEST_JSON } from './data/GlobalKeys';

function App() {

let data = {
  name: "prashanth",
  value: "something"
}
let data1 = [
{
  name: "prashanth",
  value: "something"
},{
  name: "prashanth",
  value: "something"
} 
]
  Store.storeStringData(TEST_STR, "Data")
  Store.storeObjectData(TEST_JSON, data)
  Store.storeObjectData(TEST_ARRAY, data1)

  let resp = Store.getStringData("key1");
  let resp1 = Store.getObjectData("key2");
  let resp2 = Store.getObjectData("key3");
console.log(resp, resp1, resp2)
  return (
    <div className="App">
      <header className="App-header">
        <p>
         String data : {resp}
        </p> 
  </header>
    </div>
  );
}

export default App;
