import Base from "../components/Base"
import Hero from "../components/common/hero/Hero"

const ContactPage = () => {
    return (
        <Base>
            <Hero />
            <div className="container mt-5">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSepp26VXhVrSbEjX9PeSBjGl9YQqEKDr4JS2lsMxrnTphgslw/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </Base>
    )
}

export default ContactPage