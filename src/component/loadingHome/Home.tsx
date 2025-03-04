'use client';
import React from 'react';
import ChooseArticle from '../Choose/ChooseArticle';
import Link from "next/link";
import { RedditData } from '../../util/otherAPI/otherAPI'


interface HomeProps {
    redditPosts: RedditData[];
}



const Home:React.FC<HomeProps> = ({redditPosts}) => {

    
    

    if (redditPosts.length > 0) {

        return (
            <div className='list-container'>
                {
                   redditPosts.map((article: RedditData) => {
                    const id = article.data.id;
                    const name = article.data.title;
                    
    
                    return (
                        <div key={id} className='subreddit' >
                            <Link href={`/${name}`} className='sub-title' >
                                <ChooseArticle article={article} />
                            </Link>
                        </div>
                    )
                   }) 
                }
            </div>
        )
    }
    
};

export default Home;