import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    'New York',
    'San Francisco',
    'Chicago',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return <div><ListGroup items={items} heading = 'Cities' onSelectItem={handleSelectItem}/>
  {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
  <Button text='My Button' onClick={()=>setAlertVisibility(true)} color="primary"/>
  </div>;
}

export default App;