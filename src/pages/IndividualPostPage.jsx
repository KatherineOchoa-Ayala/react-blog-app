import { useParams } from "react-router";
import BlogPost from "../components/BlogPost";
import Comments from "../components/Comments";
import { useState, useEffect } from "react";

function IndividualPostPage() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API request failed");
                }
                return response.json();
            })
            .then((data) => {
                setPost(data);
                return fetch(
                    `https://jsonplaceholder.typicode.com/users/${data.userId}`
                );
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API request failed");
                }
                return response.json();
            })
            .then((userData) => setAuthor(userData))
            .catch((error) => {
                console.error("Error fetching post or author:", error);
                setError("Oh oh! Unable to load the post or author. Please try again later.");
            });
    }, [id]);

    if (error) {
        return (
            <main>
                <p role="alert">{error}</p>
            </main>
        );
    }

    if (!post) {
        return <main><h2>Loading post...</h2></main>;
    }

    return (
        <main>
            <h2>Individual Blog Post</h2>

            <BlogPost
                title={post.title}
                content={post.body}
                author={author ? author.name : "Loading author..."}
            />
            <Comments key={post.id} postId={post.id} />
        </main>
    );
}

export default IndividualPostPage;