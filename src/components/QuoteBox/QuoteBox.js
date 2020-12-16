import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./quoteBox.scss";

export default function QuoteBox() {
    return (
        <div className="quote__wrp">
            <div className="quote__content">
                <div className="quote__sentence">
                    <FontAwesomeIcon icon={faQuoteLeft} size="lg" className='quote__icon' />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quam, quibusdam culpa aperiam nobis pariatur aliquam accusamus atque?</p>
                </div>
                <div className="quote__footer">
                    - aaaaaaaa
                    <FontAwesomeIcon icon={faTwitter} size="lg" className='quote__tweet' />
                </div>
            </div>
        </div>
    )
}
