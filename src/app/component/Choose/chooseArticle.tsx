'use client';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { chooseArticle, articleSelected } from '../../../lib/features/article/articleSlice'





interface ArticleData {
    [key: string]: string;
}

interface Article {
    data: ArticleData;
    kind: string;
} 



const ChooseArticle:React.FC<{ article: Article }> = ({article}) => {
    //const chosenState = useAppSelector(articleSelected);
    const dispatch = useAppDispatch();

    
    const handleClick = () => {
        dispatch(chooseArticle(article));
    };

    const id = article.data.id;
    const name = article.data.title;
    const redditImg = article.data.thumbnail;
   

    return (
        <div key={id} onClick={handleClick}>
            <h3>{name}</h3>
            <div>{redditImg &&
                <figure>
                    <img src={redditImg} alt='reddit image' />
                </figure>}
            </div>
            <div></div>
        </div>
    )
};

export default ChooseArticle;