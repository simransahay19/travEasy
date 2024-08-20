
import './reviews.css';
export default function Page() {
    return (
        <>
        <br></br>
            <section className="min-h-screen flex items-center justify-center">
                <div className="reviews-container">
                    <h2 className="text-2xl font-bold mb-4 btn_green">Reviews</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="review">
                            <img src="person-1.png" alt="Review 1 Image" />
                            <div className="review-content">
                                <h3 className="review-title">John Hamilton</h3>
                                <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac libero et tincidunt.</p>
                            </div>
                        </div>
                        <div className="review">
                            <img src="person-4.png" alt="Review 2 Image" />
                            <div className="review-content">
                                <h3 className="review-title">Sam rajput</h3>
                                <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac libero et tincidunt.</p>
                            </div>
                        </div>
                        <div className="review">
                            <img src="person-2.png" alt="Review 3 Image" />
                            <div className="review-content">
                                <h3 className="review-title">Sourav Kumar</h3>
                                <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac libero et tincidunt.</p>
                            </div>
                        </div>
                        <div className="review">
                            <img src="person-3.png" alt="Review 4 Image" />
                            <div className="review-content">
                                <h3 className="review-title">Sonal Rani</h3>
                                <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac libero et tincidunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
