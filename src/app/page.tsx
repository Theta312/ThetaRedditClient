'use client';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { loadInfo } from '../lib/features/home/homeSlice'
import { homeState, homeLoading } from "../lib/features/home/homeSlice";
import Home from "./component/loadingHome/home";


export default function Index() {

    const dispatch = useAppDispatch();
    const data = useAppSelector(homeState);
    const loading = useAppSelector(homeLoading);
    
    
    useEffect(() => {
        if (data.length > 0) {
            return
        } else {
            dispatch(loadInfo());
        }
    }, [])

    

    if (!loading) {
        return (
            <div className='realHome' data-testid='home' >
                <Home data={data} />
            </div>
        )
    } else {
        return (
            <div className='loading' data-testid='loading' >
                <h1>...Loading</h1>
            </div>
        )
    }
}