'use client';
import { useAppDispatch } from "../../../lib/hooks";
import { loadInfo, loadInterest, loadIAM } from '../../../lib/features/home/homeSlice'
import Link from 'next/link';


export default function Navigation() {

    const dispatch = useAppDispatch();

    const handleInterest = (e:any) => {
        e.preventDefault();
        dispatch(loadInterest());
    }

    const handleAMI = (e:any) => {
        e.preventDefault();
        dispatch(loadIAM());
    }

    const handleHome = (e:any) => {
        e.preventDefault();
        dispatch(loadInfo());
    }

    return (
        <div>
            <button type='button' onClick={handleHome} ><Link href='/' >Home</Link></button>
            <button type='button' onClick={handleAMI} ><Link href='/' >AITA</Link></button>
            <button type='button' onClick={handleInterest} ><Link href='/' >IAF</Link></button>
        </div>
    )
}



