import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header, Footer } from './Components/Layouts/index'
import CharacterGrid from './Components/CharacterGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://ghibliapi.herokuapp.com/people`)

      console.log(result.data)
      setItems(result.data);
      setIsLoading(false)
    }
    fetchItems();

  }, [])

  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
