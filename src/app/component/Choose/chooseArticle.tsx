'use client';
import { useAppDispatch} from '../../../lib/hooks';
import { chooseArticle } from '../../../lib/features/article/articleSlice'
import { RedditData } from '../../../util/otherAPI/otherAPI'



interface ChooseArticleProps {
    article: RedditData;
}




const ChooseArticle:React.FC<ChooseArticleProps> = ({article}) => {
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