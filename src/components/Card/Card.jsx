import styles from './Card.module.scss';

const Card = (props) => {
  const { name, price, rarity, set, src_png, tcplayer, type } = props.card;
  let rarityCap = rarity[0].toUpperCase() + rarity.substr(1);
  return (
    <article className={styles.cardWrapper}>
      <header className={styles.cardHeader}>
        <img src={src_png} alt='' />
      </header>
      <main className={styles.articleBody}>
        <h2>{name}</h2>
        <ul className={styles.cardAttrs}>
          <li>
            <p>Rarity</p>
            <span>{rarityCap}</span>
          </li>
          <li>
            <p>Type</p>
            <span>{type}</span>
          </li>
          <li>
            <p>Set</p>
            <span>{set}</span>
          </li>
        </ul>
      </main>
      <footer className={styles.cardFooter}>
        <a href={tcplayer}>Click to Buy</a>
        <p>Price {price}$</p>
      </footer>
    </article>
  );
};

export default Card;
