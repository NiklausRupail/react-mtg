import { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import { getRandomCards } from '../fetches/getRandomCards';
import styles from './HomepageTemplate.module.scss';
import { v4 as uuid } from 'uuid';

function HomepageTemplate() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getRandomCards();
      setCards(data);
    };
    getData();
  }, []);

  return (
    <>
      <Nav pageType={'HOMEPAGE'} />
      <Header title={'Welcome to the World of MTG!'} />
      <div className={styles.cards}>
        {cards.map((card) => (
          <Fragment key={uuid()}>
            <Card card={card} />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default HomepageTemplate;
