const fetchRandomCard = async () => {
  const request = 'https://api.scryfall.com/cards/random';

  return await fetch(request)
    .then((response) => response.json())
    .then((data) => ({
      name: data.name,
      price: data.prices.usd || null,
      rarity: data.rarity,
      tcgplayer: data.purchase_uris.tcgplayer || null,
      src_png: data.image_uris.normal || null,
      set: data.set_name,
      type: data.type_line,
      id: data.id
    }))
    .catch((err) => console.error(err));
};

export const getRandomCards = async () => {
  const cards = [];

  cards.push(await fetchRandomCard());
  cards.push(await fetchRandomCard());
  cards.push(await fetchRandomCard());
  cards.push(await fetchRandomCard());
  cards.push(await fetchRandomCard());
  cards.push(await fetchRandomCard());

  return cards;
};
