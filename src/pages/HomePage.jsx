import { Link } from "react-router";
import coffee from "../assets/coffee.jpeg";
import { useAuth } from "../context/AuthContext.jsx";
import location from "../assets/location.jpeg";
import heart from "../assets/heart.jpeg";
import reviews from "../assets/reviews.jpeg";

function HomePage() {
    const { isAuthenticated } = useAuth();
    return (
        <main className="home-page">
            <section className="hero">
                <img 
                    src={coffee}
                    alt="Cup of coffee with heart latte art"
                    className="hero-image"
                />

                <p>
                    <strong> Welcome to Beans Blog!</strong> Discover cozy coffee shops, explore great coffee, and share your favorite cafe
                    experiences in Charlotte!
                </p>

                <div className="hero-buttons">
                    {!isAuthenticated && (
                        <Link to="/login" className="login-btn">
                            Login
                        </Link>

                    )}
                    <Link to="/blog" className="explore-btn">
                        Explore Blog
                    </Link>
                </div>
            </section>

            <section className="home-features">
                <div className="feature-card">
                    <img
                        src={location}
                        alt="Coffee shop location"
                        className="feature-image"
                    />
                    <h2>Discover Cafes</h2>
                    <p>Find your next favorite coffee spot.</p>
                </div>

                <div className="feature-card">
                    <img
                        src={heart}
                        alt="Brown heart"
                        className="feature-image"
                    />
                    <h2>Favorite Drinks</h2>
                    <p>Explore new flavors.</p>
                </div>

                <div className="feature-card">
                    <img
                        src={reviews}
                        alt="Brown review chat box"
                        className="feature-image"
                    />
                    <h2>Cafe Reviews</h2>
                    <p>Share your experiences with our community.</p>
                </div>
            </section>
        </main>
    );
}

export default HomePage;