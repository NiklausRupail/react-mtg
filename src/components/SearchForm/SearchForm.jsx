import classNames from 'classnames';
import { useState } from 'react';
import Select from 'react-select';
import { getCard } from '../../fetches/getCard';
import styles from './SearchForm.module.scss';

const SearchForm = (props) => {
  const { setCard } = props;
  const [formData, setFormData] = useState({ searchType: 'fuzzy' });

  const selectOptions = [
    { value: 'fuzzy', label: 'Fuzzy' },
    { value: 'exact', label: 'Exact' },
    { value: 'RANDOM_CARD', label: 'Random Card' }
  ];

  const submitForm = async (e) => {
    e.preventDefault();
    // const responseBody = {};
    // const formData = new FormData(e.currentTarget);
    // formData.forEach((value, property) => (responseBody[property] = value));
    // console.log(responseBody);

    const card = await getCard(formData.searchType, formData.cardName);
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
        <label htmlFor='searchType'>
          Search Type:
          <Select
            id='searchType'
            className={styles.select}
            defaultValue={formData.searchType}
            options={selectOptions}
            onChange={(e) => {
              setFormData({ ...formData, searchType: e.value });
            }}
            styles={{
              control: (base) => ({
                ...base,
                height: 50,
                minHeight: 50
              })
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
