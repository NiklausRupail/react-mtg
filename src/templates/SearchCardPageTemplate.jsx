import { useState } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import '../styles/globals.scss';
import Nav from '../components/Nav/Nav';

function SearchCardPageTemplate() {
  const [card, setCard] = useState(null);
  return (
    <>
      <Nav pageType={'SEARCH_PAGE'} />
      <Header title={'Search Your Card!'} />
      <SearchForm setCard={setCard} />
      {card && <Card card={card} />}
    </>
  );
}

export default SearchCardPageTemplate;
