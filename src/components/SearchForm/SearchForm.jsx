import classNames from 'classnames';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { getCard } from '../../fetches/getCard';

const SearchForm = (props) => {
  const { setCard } = props;
  const [formData, setFormData] = useState({});

  const submitForm = async (e) => {
    e.preventDefault();
    // const responseBody = {};
    // const formData = new FormData(e.currentTarget);
    // formData.forEach((value, property) => (responseBody[property] = value));
    // console.log(responseBody);

    const card = await getCard('fuzzy', formData.cardName);
    setCard(card);
  };
  return (
    <form
      onSubmit={submitForm}
      className={classNames('container', styles.form)}
    >
      <div className={styles.inputs}>
        <label htmlFor='cardName'>
          Card Name:
          <input
            className={styles.input}
            id='cardName'
            name='cardName'
            type='text'
            onChange={(e) => {
              setFormData({ ...formData, cardName: e.currentTarget.value });
            }}
          />
        </label>
      </div>
      <button className={styles.button} type='submit'>
        Search Card
      </button>
    </form>
  );
};

export default SearchForm;
