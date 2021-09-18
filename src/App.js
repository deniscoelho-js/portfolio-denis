import './App.css';
import items from './components/Data'
import Menu from './components/Menu'
import Header from './components/Header';
import Button from './components/Button';
import Contact from './components/Contact';
import { useState } from 'react';


const allCategories = [...new Set(items.map(item => item.category))]

function App() {

  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);   

  // allCategories

  const filter = (button) => {

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item=> item.category === button);
    setMenuItem(filteredData)
  }

  return (
    <div className="App">
      <Header/>
      <Contact/>

      <div className="title">
        <h1>
          Habilidades
        </h1>
      </div>

      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />

    </div>
  );
}

export default App;
