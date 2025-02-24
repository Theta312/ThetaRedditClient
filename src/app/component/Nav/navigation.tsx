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
        <div className='navigation' >
            <div className='button home' >
                <button type='button' onClick={handleHome} ><Link href='/' >Home</Link></button>
            </div>
            <div className='button IAM'>
            <button type='button' onClick={handleAMI} ><Link href='/' >AMIA</Link></button>
            </div>
            <div className='button interest'>
                <button type='button' onClick={handleInterest} ><Link href='/' >IAF</Link></button>
            </div>
        </div>
    )
}



