'use client';
import React from 'react';
import { useAppDispatch } from "../../../lib/hooks";
import { loadSearch }  from '../../../lib/features/home/homeSlice'
import { useState } from 'react';



export default function SearchBar() {

    const [search, setSearch] = useState<any>('');
    const dispatch = useAppDispatch();

    interface searchProp {
        target: {
            value: string
        }
    };

    const handleChange = (e:searchProp ) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (search === '') {
            return
        } else {
            dispatch(loadSearch(search));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={search} onChange={handleChange} placeholder='Search...' />
                <button type='submit' >Search</button>
            </form>
        </div>
    )
}
