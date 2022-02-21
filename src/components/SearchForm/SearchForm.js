import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { searchCard } from '../../redux/searchingStringRedux';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchCard( searchValue ));
    // ({ type: 'SEARCH', payload });
    // dispatch({ type: 'SEARCH', payload: searchValue });
  }
  // useEffect(() => {
    // setSearchValue('');
    // handleSubmit(searchValue);
    // return () => {
    //   dispatch(searchCard( '' ));
    // };
  // }, []);
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." />
            <Button >
              <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
