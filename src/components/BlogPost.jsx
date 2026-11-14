import { Link } from "react-router";

function BlogPost({ id, title, content, author }) {
    return (
        <article className="blog-post">
            <h2>{title}</h2>
            <p>{content}</p>
            <p><strong>Author:</strong> {author}</p>

            {id && <Link to={`/post/${id}`}>Read More</Link>}
        </article>
    );    
}

export default BlogPost;