import React from "react";
import styles from './styles.module.css';

interface NewsItem {
    id: string,
    title:string
}

interface NewsListPromis{
    news:Array<NewsItem>
}

const NewsList:React.FC<NewsListPromis> = ({news}) =>{
    return(
        <ul className = {styles.list}>
            {news.map(item => {
                return<li key = {item.id}>{item.title}</li>
            })}
        </ul>
    );
};

export default NewsList 