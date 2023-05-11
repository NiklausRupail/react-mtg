export const getCard = async (searchType, searchText) => {
  const request =
    searchType !== 'RANDOM_CARD'
      ? `https://api.scryfall.com/cards/named?${searchType}=${searchText}`
      : `https://api.scryfall.com/cards/random`;

  return await fetch(request)
    .then((response) => response.json())
    .then((data) => ({
      name: data.name,
      price: data.prices.usd || null,
      rarity: data.rarity,
      tcgplayer: data.purchase_uris.tcgplayer || null,
      src_png: data.image_uris.normal || null,
      set: data.set_name,
      type: data.type_line
    }))
    .catch((err) => console.error(err));
};
