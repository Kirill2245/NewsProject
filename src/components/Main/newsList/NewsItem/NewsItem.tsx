import styles from './styles.module.css';
import { formatTimeAgo } from '../../../../helpers/formatTimeAgo';

interface NewsItemProps {
    image: string;
    title: string;
    published: string;
    author: string;
}

interface NewsBannerProps {
    item: NewsItemProps;
}

const NewsItem: React.FC<NewsBannerProps> = ({ item }) => {
    return (
        <li className={styles.item}>
            <div 
                className={styles.wrapper} 
                style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.date}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    );
};

export default NewsItem;