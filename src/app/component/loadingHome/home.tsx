'use client';
import React from 'react';
import ChooseArticle from "../Choose/chooseArticle";
import Link from "next/link";

interface Article {
    [key: string]: any;
} 

type MyComponentProps = {
    [key: string]: any;
};

const Home:React.FC<MyComponentProps> = ({data}) => {



    if (data) {

        return (
            <div className='list-container'>
                {
                   data.map((article:Article) => {
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