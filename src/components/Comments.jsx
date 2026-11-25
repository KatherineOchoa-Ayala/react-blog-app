import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router";

function Comments({ postId }) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState("");
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch comments");
                }
                return response.json();
            })
            .then((data) => setComments(data))
            .catch((error) => {
                console.error("Error fetching comments:", error);
                setError("Oh no! Unable to load comments. Please try again later.");
            });
    }, [postId]);

    function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (name.trim() === "" || comment.trim() === "") {
            return;
        }

        const newComment = {
            name: name,
            body: comment,
            postId: postId
        };

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to post comment");
                }
                return response.json();
            })
            .then((data) => {
                setComments((prevComments) => [...prevComments, data]);
                setName("");
                setComment("");
            })
            .catch((error) => {
                console.error("Error posting comment:", error);
                setError("Oh no! Your comment could not be posted. Please try again.");
            
            });
       
    }

    return (
        <section className="comments">
            <h2>Comments</h2>
            {error && <p role="alert">{error}</p>}

            {isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="commentName">Name:</label>
                    <input
                        type="text"
                        id="commentName"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                
                    <label htmlFor="commentText">Comment:</label>
                    <textarea
                        id="commentText"
                        name="comment"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Please <Link to="/login">log in</Link> to leave a comment.</p>
            )}
            <h3>Existing Comments:</h3>
            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
            ) : (
                <ul>
                    {comments.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}:</strong> {item.body}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Comments;