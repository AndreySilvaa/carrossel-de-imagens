import {useState} from 'react'
import './App.css';
import Carosel from './components/Carosel';
import SideBar from './components/SideBar';


function App() {
  const [item, setItem] = useState(0)
  const [category, setCategory] = useState(0)

  return (
    <div className="App">
      <h1> Carousel Images</h1>
      <SideBar item={setItem} setCategory={setCategory} category={category}/>
      <Carosel item={item} setItem={setItem} category={category}/>
    </div>
  );
}

export default App;
