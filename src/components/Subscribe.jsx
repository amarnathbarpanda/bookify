import React from 'react';
import './Subscribe.css';
function Subscribe() {
    return (
        <div className="subscribe">
            <h1 className="subs__title">Subscribe to our newsletter and you will get notified when a new book is released.</h1>
            <div className="subs__container">
                <div className="subs__left">
                    <img src="img/New Message_Monochromatic.png" alt="" />
                </div>
                <div className="subs__right">
                    <form>
                        <input type="text" placeholder="Email address"/>
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
