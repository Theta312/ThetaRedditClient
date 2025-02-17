'use client';
import { useRouter } from 'next/navigation';
import { articleSelected } from '../../lib/features/article/articleSlice'
import { useAppSelector } from '../../lib/hooks';




export default function Article() {

    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };
    const article = useAppSelector(articleSelected);

    
    let name: string;
    let texted;
    if (article.data) {
        name = article.data.title;
        texted = article.data.selftext;
    } else {
        name = 'Article Not Found'
    }

    return (
        <div>
            <h1>Article:</h1>
            <h2>{name} </h2>
            <p>{texted}</p>
            <button type='button' onClick={handleGoBack}>Go Back</button>
        </div>
    )
}