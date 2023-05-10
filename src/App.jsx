import { useState } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import './styles/globals.scss';
import Card from './components/Card/Card';

function App() {
  const [card, setCard] = useState(null);
  return (
    <>
      <Header title={'MTG Application'} />
      <SearchForm setCard={setCard} />
      {card && <Card card={card} />}
    </>
  );
}

export default App;
