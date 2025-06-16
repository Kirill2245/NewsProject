import styles from './styles.module.css';

interface ImageProps{
    image:string
}
const ImageBanner:React.FC<ImageProps> = ({image}) => {
    return(
        <div className={styles.wrapper}>
            { image ? (<img src = {image} alt = "news" className={styles.image}></img>): null}
        </div>
    );
}
export default ImageBanner