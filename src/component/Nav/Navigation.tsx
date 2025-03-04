'use client';
import { useAppDispatch } from "../../lib/hooks";
import { loadInfo, loadInterest, loadIAM } from '../../lib/features/home/homeSlice'
import Link from 'next/link';


export default function Navigation() {

    const dispatch = useAppDispatch();

    const handleInterest = () => {
        
        dispatch(loadInterest());
    }

    const handleAMI = () => {
      
        dispatch(loadIAM());
    }

    const handleHome = () => {
        dispatch(loadInfo());
    }

    return (
        <div className='navigation' >
            <div className='button home' >
                <button type='button' onClick={handleHome} ><Link href='/' className='boton' >Home</Link></button>
            </div>
            <div className='button IAM'>
            <button type='button' onClick={handleAMI} ><Link href='/' className='boton' >AMIA</Link></button>
            </div>
            <div className='button interest'>
                <button type='button' onClick={handleInterest} ><Link href='/' className='boton' >IAF</Link></button>
            </div>
        </div>
    )
}



