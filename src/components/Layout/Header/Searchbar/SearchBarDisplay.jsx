import React from 'react'
import SearchList from './SearchList';
import styles from '@/styles/searchbar.module.css'


export default function SearchBarDisplay({ queryResult }) {
    const display = queryResult?.map((product, index) => <SearchList key={product._id} searchList={product} index={index} />);

    const content = display?.length ? display : null

    return (
        <ul className={styles['searchbar__input-ul']} >
            {content}
        </ul>
    )
}
