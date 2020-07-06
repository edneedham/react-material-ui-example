import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://ghibliapi.herokuapp.com/people`)

      console.log(result.data)
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
