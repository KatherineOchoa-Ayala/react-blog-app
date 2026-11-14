import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/post/:id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;