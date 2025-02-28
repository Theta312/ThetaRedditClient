'use client';
import React from 'react';
import { useAppDispatch } from "../../../lib/hooks";
import { loadSearch }  from '../../../lib/features/home/homeSlice'
import { useState } from 'react';



export default function SearchBar() {

    const [search, setSearch] = useState<string>('');
    const dispatch = useAppDispatch();

    interface searchProp {
        target: {
            value: string
        }
    };

    const handleChange = (e:searchProp ) => {
        setSearch(e.target.value);
    };

    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (search === '') {
            return;
            return;
        } else {
            dispatch(loadSearch(search));
            setSearch('');
        }
    }

    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit} >
                <input className='searchInput' type='text' value={search} onChange={handleChange} placeholder='Search...' />
                <button className='submitButton'  type='submit' >Search</button>
            </form>
        </div>
    )
}
