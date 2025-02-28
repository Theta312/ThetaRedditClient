'use client';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { loadInfo } from '../lib/features/home/homeSlice'
import { homeState, homeLoading } from "../lib/features/home/homeSlice";
import Home from "./component/loadingHome/home";
import { RedditData } from '../util/otherAPI/otherAPI'




export default function Index() {

    const dispatch = useAppDispatch();
    const homeValue: RedditData[] = useAppSelector(homeState);
    const loading: boolean = useAppSelector(homeLoading);
    
    
    
    useEffect(() => {
        if (homeValue.length > 0) {
            return
        } else {
            dispatch(loadInfo());
        }
    }, [homeValue, dispatch])

    

    if (!loading) {
        return (
            <div className='realHome'  data-testid='home' >
                <Home redditPosts={homeValue} />
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