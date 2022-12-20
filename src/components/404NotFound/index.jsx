import React from 'react';
import './404notfound.scss'

function Error() {
    return (
        <div className="error-container">
            <img
                src="/assets/svg/error-page-not-found-tv.svg"
                alt="404 Not Found"
            />
            <div className="warning-text">
                <h3>Uh-oh...</h3>
                <span>The page could not be found.</span>
            </div>

            <div className="return-to-home">
                <button className="btn">Return to Home</button>
            </div>
        </div>
    );
}

export default Error;
