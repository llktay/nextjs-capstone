import Image from "next/image";
import classes from './post-header.module.css';
function PostHeader(props) {
    
    const { title, image, slug } = props.post;
    const imagePath = `/images/posts/${slug}/${image}`;
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={imagePath} alt={title} width={200} height={150}/>
        </header>
    )
}
 
export default PostHeader;