function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    }
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p> Have a question?</p>
            <p>
                Email: <a href="mailto:katmochoa@gmail.com">
                    katmochoa@gmail.com
                </a>
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;