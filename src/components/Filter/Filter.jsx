import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { addFilter, selectorFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectorFilter)
  const dispatch = useDispatch()

  const hendleAddFilter = ({ target: { value } }) =>
    dispatch(addFilter(value))

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={hendleAddFilter}
          value={filter}
          className={styles.searchInput}
          type='text'
          id='search'
          placeholder='Search something..'
        />
      </div>
    </div>
  );
};
