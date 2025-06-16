import styles from './styles.module.css';
import NewsItem from './NewsItem/NewsItem';

interface NewsItemProps {
    id: string;
    image: string;
    title: string;
    published: string;
    author: string;
}

interface NewsListProps {
    news: NewsItemProps[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map(item => (
                <NewsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default NewsList;