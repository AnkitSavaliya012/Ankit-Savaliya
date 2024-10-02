import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        const upperText = text.toUpperCase();
        setText(upperText);
        // console.log("Converted to uppercase:", upperText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to uppercase
            </button>
        </div>
    );
}
