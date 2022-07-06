import { useState } from "react";

function Subscribe() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <section className="wrapper">
                <div className="container">
                    <div className="close-btn">
                        <i onClick={()=> setVisible(false)}>+</i>
                    </div>
                    <div className="content">
                        <h1 className="title">Let's Keep In Touch</h1>
                        <p className="subtitle">Subscribe to get monthly free coding resources straight to your inbox!</p>
                        <input type="email" className="mail" placeholder="Your email address" name="mail" required />
                        <span  onClick={console.log('clicked')} className="subscribe">Subscribe</span>
                        <p className="text">We won't send you spam. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscribe;