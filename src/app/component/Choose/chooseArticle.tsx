'use client';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { chooseArticle, articleSelected } from '../../../lib/features/article/articleSlice'




interface Product {
    [key: string]: any; 
};



type MyComponentProps = {
    [key: string]: any;
}

const ChooseArticle:React.FC<MyComponentProps> = ({article}) => {
    const chosenState = useAppSelector(articleSelected);
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(chooseArticle(article));
    }

    const id = article.data.id;
    const name = article.data.title;
  

    return (
        <div key={id} onClick={handleClick} className='try'>
            <h3>{name}</h3>
        </div>
    )
};

export default ChooseArticle;