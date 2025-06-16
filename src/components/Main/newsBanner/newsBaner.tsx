import styles from './styles.module.css';
import { formatTimeAgo } from '../../../helpers/formatTimeAgo';
import ImageBanner from './ImageBanner/ImageBanner';
interface NewsItem {
    image: string;
    title: string;
    published: string;
    author: string;
}
interface NewsBannerProps{
    item:NewsItem;
}
const NewsBanner:React.FC<NewsBannerProps> = ({item}) => {
    return(
        <div className={styles.banner}>
            <ImageBanner image={item.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.date}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
}
export default NewsBanner