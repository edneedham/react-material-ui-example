import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, Footer } from './Components/Layouts/index';
import CharacterGrid from './Components/CharacterGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://ghibliapi.herokuapp.com/people`)

      // console.log(result.data)
      setItems(result.data);
      setIsLoading(false)
    }
    setTimeout(fetchItems(), 3000);

  }, [])

  return (
    <div>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
}

export default App;
